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


export default router;