import express from "express";
import { RequestService } from "../services/requests.service.js";
import { RequestStatusService } from "../services/requestStatus.service.js";
import { RequestItemsService } from "../services/requestItems.service.js";
import { sequelize } from "../lib/connection.js";
import { where } from "sequelize";

const router = express.Router();
const requests = new RequestService();
const requestStatus = new RequestStatusService();
const requestItems = new RequestItemsService();

router.post("/create-request", async (req, res) => {
    const transaction = await sequelize.transaction()
    try {
        const { request } = req.body;
        const requestData = {
            monitorId: request.monitorId,
            teacherId: request.teacherId,
            requestDate: request.requestDate,
            requestTime: request.requestTime,
            hoursRequested: request.hoursRequested
        };

        // Crea la solicitud
        const requestCreated = await requests.createRequest(requestData, {transaction});

        // Crea el estado inicial de la solicitud
        const requestStatusData = {
            requestId: requestCreated.requestId,
            status: "Pending",
        };
        await requestStatus.createRequestStatus(requestStatusData, {transaction});

        // Crea todos los ítems de la solicitud en una sola operación
        const requestItemsData = request.device.map(item => ({
            requestId: requestCreated.requestId,
            deviceId: item.deviceId,
            quantity: item.quantity
        }));
        await requestItems.createRequestItems(requestItemsData, {transaction});
        await transaction.commit();
        return res.status(200).json({ message: "Request created successfully", request });
    } catch (error) {
        await transaction.rollback();
        console.log(error);
        res.status(500).json({ error: error.message });
    }
});

router.put("/deliver-request", async (req, res) => {
    try {
        const { status, requestId  } = req.body;
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

router.put("/return-request", async (req, res) => {
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


export default router;