import express from "express";
import { RequestService } from "../services/requests.service.js";
import { RequestStatusService } from "../services/requestStatus.service.js";
import { RequestItemsService } from "../services/requestItems.service.js";
import { sequelize } from "../lib/connection.js";
import authenticateToken from "../middlewares/auth.handler.js";
import DeviceService from "../services/device.service.js";
import StockService from "../services/stock.service.js";
import { WarehouseService } from "../services/warehouses.service.js";

const router = express.Router();
const requests = new RequestService();
const requestStatus = new RequestStatusService();
const requestItems = new RequestItemsService();
const deviceService = new DeviceService();
const stock = new StockService();
const warehouse = new WarehouseService();

router.post("/create-request",authenticateToken, async (req, res) => {
    const transaction = await sequelize.transaction()
    try {
        const { request } = req.body;
        const { userId } = req.user; 
        const requestData = {
            teacherId: userId,
        };

        // Crea la solicitud
        const requestCreated = await requests.createRequest(requestData, {transaction});

        // Crea el estado inicial de la solicitud
        const requestStatusData = {
            requestId: requestCreated.requestId,
            status: "Waited",
        };
        await requestStatus.createRequestStatus(requestStatusData, {transaction});

        // Crea todos los ítems de la solicitud en una sola operación
        const requestItemsData = request.device.map(item => ({
            requestId: requestCreated.requestId,
            deviceId: item.deviceId,
            quantity: item.quantity
        }));
        await requestItems.createRequestItems(requestItemsData, {transaction});
        for (const devices of request.device) {
        const getDevice = await deviceService.getDeviceById(devices.deviceId);
        const getStock = (await stock.getStocksByFilters({ deviceTypeId: getDevice.deviceTypeId }))[0];

        if (getStock.quantity < devices.quantity) {
          await transaction.rollback();
            return res.status(500).json({ message: `Device with ID ${devices.deviceId} has not enough stock.`, error: true });
            // throw new Error(`Device with ID ${devices.deviceId} has not enough stock.`);
        }
        await getStock.update({ quantity: getStock.quantity - devices.quantity }, { transaction });
      }
        await transaction.commit();
        return res.status(200).json({ message: "Request created successfully", request });
    } catch (error) {
        await transaction.rollback();
        console.log(error);
        res.status(500).json({ error: error.message });
    }
});

router.post("/pending-devices/:requestId", authenticateToken, async (req, res) => {
  const transaction = await sequelize.transaction()
  try {
      const { request } = req.body;
      const { requestId } = req.params;
      const requestData = {
          requestDate: request.requestDate,
          requestTime: request.requestTime,
          hoursRequested: request.hoursRequested
      };

      // Crea la solicitud
      const requestCreated = await requests.updatedRequest(requestId,requestData, {transaction});

      // Crea el estado inicial de la solicitud
      const requestStatusData = {
          requestId: requestId,
          status: "Pending",
      };
      await requestStatus.createRequestStatus(requestStatusData, {transaction});

      // Crea todos los ítems de la solicitud en una sola operación
      const requestItemsData = request.device.map(item => ({
          requestId: requestCreated.requestId,
          deviceId: item.deviceId,
          quantity: item.quantity
      }));
      const existingItems = await requestItems.getRequestItems({where: {requestId: requestId}});
      for (const device of request.device) {
        const existingItem = existingItems.find(
          (item) => item.deviceId === device.deviceId
        );
        if (!existingItem) {
          throw new Error(`Device with ID ${device.deviceId} not found in request.`);
        }
        if (existingItem.quantity !== device.quantity) {
          await existingItem.update(
            { quantity: device.quantity },
            { transaction }
          );
          const getDevice = await deviceService.getDeviceById(device.deviceId);
        const getStock = (await stock.getStocksByFilters({ deviceTypeId: getDevice.deviceTypeId }))[0];

        if (getStock.quantity < device.quantity) {
          await transaction.rollback();
            return res.status(500).json({ message: `Device with ID ${device.deviceId} has not enough stock.`, error: true });
        }
        getStock.update({ quantity: getStock.quantity - device.quantity });
        }
      }
      // await requestItems.createRequestItems(requestItemsData, {transaction});
      await transaction.commit();
      return res.status(200).json({ message: "Request updated successfully", request });
  } catch (error) {
      await transaction.rollback();
      console.log(error);
      res.status(500).json({ error: error.message });
  }
});

router.put("/deliver-request", authenticateToken, async (req, res) => {
    try {
        const { status, requestId  } = req.body;
        const { userId } = req.user; 
        await requests.addMonitorToRequest(requestId, userId);
        await requestStatus.updatedRequestStatus({status}, {
            where: { requestId },
            returning: true
            });
          
        return res.status(200).json({ message: "Request updated successfully" });
    } catch (error) {

        console.log(error);
        res.status(500).json({ error: error.message });
    }
});

router.put("/return-request", authenticateToken, async (req, res) => {
    const transaction = await sequelize.transaction();
    try {
      const { status, requestId, listObservation, isTeacher } = req.body;
      await requestStatus.updatedRequestStatus(
        { status },
        {
          where: { requestId },
          returning: true,
          transaction,
        }
      );
  
      if (
        listObservation &&
        Array.isArray(listObservation) &&
        listObservation.length > 0
      ) {
        for (const observation of listObservation) {
          let observationsData = {};
          if (isTeacher) {
            observationsData = {
              requestId, // Asegúrate de que requestId esté relacionado con el ítem
              returnCommentTeacher: observation.text, // La observación del dispositivo
              deviceId: observation.deviceId, // El ID del dispositivo
            };
          } else {
            observationsData = {
              requestId, // Asegúrate de que requestId esté relacionado con el ítem
              returnCommentMonitor: observation.text, // La observación del dispositivo
              deviceId: observation.deviceId, // El ID del dispositivo
            };
          }
          await requestItems.updatedRequestItems(observationsData, {
            where: {
              requestId: requestId, // Condición donde requestId coincida
              deviceId: observation.deviceId, // Condición donde deviceId coincida
            },
            transaction,
          });
        }
      }
      await transaction.commit();
      return res.status(200).json({ message: "Request updated successfully" });
    } catch (error) {
      await transaction.rollback();
      console.log(error);
      res.status(500).json({ error: error.message });
    }
  });

router.get("/waited", authenticateToken, async (req, res) => {
    try {
        const { userId } = req.user;
        const requestsList = await requests.getRequestByTeacherId({where: {teacherId: userId}});
        const requestsStatus = await requestStatus.getRequestStatus({where: {requestId: requestsList[requestsList.length - 1].requestId}});
        if(requestsStatus[requestsStatus.length - 1].status !== "Waited"){
            return res.status(200).json({message: "Request is still waiting for approval"});
        }
        const requestsDevices = await requestItems.getRequestItems({where: {requestId: requestsList[requestsList.length - 1].requestId}});
        const createResponse = [];
        for (const requestDevice of requestsDevices) {
            const device = await deviceService.getDeviceById(requestDevice.deviceId);
            const warehouseName = await warehouse.getWarehouseById(device.warehouseId);
            createResponse.push({
                ...requestDevice.dataValues,
                ...device.dataValues,
                warehouseName: warehouseName.dataValues.name
            });

        }
        return res.status(200).json(createResponse);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
  });
  

export default router;