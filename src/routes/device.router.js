import express from "express";
import multer from "multer";
import { authorize, uploadFile } from "../tools/drive.js";
import DeviceService from "../services/device.service.js";
import authenticateToken from "../middlewares/auth.handler.js";
import { createDeviceSchema } from "../schemas/device.schema.js";
import { validateRequestBody } from "../middlewares/validate.handler.js";
import StockService from "../services/stock.service.js";
import { DeviceTypeService } from "../services/deviceType.service.js";

const router = express.Router();
const storage = multer.memoryStorage();
const deviceService = new DeviceService();
const stockService = new StockService();
const deviceTypeService = new DeviceTypeService();
/**
 * Middleware for handling file uploads using multer.
 *
 * @constant {multer.Multer} upload - The multer instance configured with the specified storage.
 */
const upload = multer({ storage: storage });

/**
 * Uploads a file to the server and returns the file ID.
 *
 * @param {object} authClient - The authentication client used for the upload.
 * @param {string} fileName - The name of the file to be uploaded.
 * @param {string} mimeType - The MIME type of the file.
 * @param {Buffer} imageBuffer - The buffer containing the file data.
 * @returns {Promise<string>} - A promise that resolves to the ID of the uploaded file.
 */
router.post(
  "/create",
  upload.single("image"),
  authenticateToken,
  validateRequestBody(createDeviceSchema, "body"),
  async (req, res) => {
    if (!req.file) {
      return res.status(400).send("No image uploaded.");
    }

    try {
      const authClient = await authorize();
      const {
        deviceName,
        deviceType,
        warehouse,
        deviceStatus,
        deviceDescription,
        brand,
        quantity,
      } = req.body;
      const imageBuffer = req.file.buffer; // La imagen está en memoria
      const mimeType = req.file.mimetype; // Tipo MIME del archivo
      const fileName = req.file.originalname; // Nombre original del archivo

      const fileId = await uploadFile(
        authClient,
        fileName,
        mimeType,
        imageBuffer
      );

      const fileUrl = `https://drive.google.com/file/d/${fileId}/view?usp=sharing`;
      deviceService.createDevice({
        name: deviceName,
        deviceTypeId: deviceType,
        warehouseId: warehouse,
        brand,
        statusId: deviceStatus,
        urlPicture: fileId,
        description: deviceDescription,
      });
      const dataStock = {
        deviceTypeId: deviceType,
        quantity: parseInt(quantity),
      };
      await stockService.updateOrCreateStock(dataStock);
      res.status(200).json({
        message: "Image uploaded! Image uploaded! ",
        fileId,
        fileUrl,
        deviceName,
        deviceType,
      });
    } catch (error) {
      console.error("Error uploading image:", error);
      res.status(500).send("Error uploading image.");
    }
  }
);

/**
 * Retrieves all devices from the database.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - The response object with the devices.
 */
router.post("/", authenticateToken, async (req, res) => {
  try {
    const { role } = req.user;
    const { filters, page, pageSize } = req.body;
    if (!role) {
      return res
        .status(403)
        .json({ message: "Role information missing from token", error: true });
    }
    let devices;
    if (filters) {
      console.log(filters);
      devices = await deviceService.getDevicesByFilters(filters, page, pageSize);
    } else {
      devices = await deviceService.getAllDevices();
    }
    res.status(200).json(devices);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/", async (req, res) => {
  try {
    let devices = await deviceService.deleteAllDevices();
    console.log(devices);
    res.status(200).json(devices);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/create-device-type', async (req, res) => {
  try {
    const { name } = req.body;
    const deviceType = await deviceTypeService.createDeviceType({ name });
    res.status(200).json(deviceType);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
