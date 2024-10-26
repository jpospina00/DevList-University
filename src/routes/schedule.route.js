import express from "express";
import { ScheduleService } from "../services/schedule.service.js";

const router = express.Router();
const scheduleService = new ScheduleService();


router.post("/change-schedule", async (req, res) => {
    try {
        const { scheduleData } = req.body;
        console.log(scheduleData);
        const schedule = await scheduleService.createSchedule(scheduleData);
        res.status(200).json({ message: "Schedule created successfully", schedule });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


router.post("/change-schedule-state", async (req, res) => {
    try {
        const { monitorId, status } = req.body;

        console.log(monitorId);
        const schedule = await scheduleService.changeScheduleState(monitorId, status);
        res.status(200).json({ message: "Schedule updated successfully", schedule });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});



export default router;