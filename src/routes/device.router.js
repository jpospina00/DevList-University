import express from "express";
import multer from "multer";
import { authorize, uploadFile } from "../tools/drive.js";
import DeviceService from "../services/device.service.js";
import authenticateToken from "../middlewares/auth.handler.js";
import { createDeviceSchema } from "../schemas/device.schema.js";
import { validateRequestBody } from "../middlewares/validate.handler.js";
import StockService from "../services/stock.service.js";
import { DeviceTypeService } from "../services/deviceType.service.js";
import { WarehouseService } from "../services/warehouses.service.js";
import UserService from "../services/user.service.js";
import { createPDF } from "../tools/pdf.js";
import { sendDeviceDeactivationReport } from "../tools/emails.js";
import fs from 'fs';

const router = express.Router();
const storage = multer.memoryStorage();
const deviceService = new DeviceService();
const stockService = new StockService();
const deviceTypeService = new DeviceTypeService();
const userService = new UserService();
const warehouseService = new WarehouseService();
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
      devices = await deviceService.getAllDevices(page, pageSize);
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
    return res.status(200).json(deviceType);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

router.get('/warehouses', async (req, res) => {
  try {

    const warehouse = await warehouseService.getWarehouses();
    return res.status(200).json(warehouse);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

router.get('/device-type', async (req, res) => {
  try {

    const deviceType = await deviceTypeService.getDeviceType();
    return res.status(200).json(deviceType);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/**
 * Deletes a device and its associated image from Google Drive.
 *
 * @param {string} req.params.id - The ID of the device to be deleted.
 */
router.put(
  "/:id",
  authenticateToken,
  async (req, res) => {
    const deviceId = req.params.id;

    try {
      // Obtener el dispositivo de la base de datos
      console.log(deviceId);
      const device = await deviceService.getDeviceById(deviceId);

      // Eliminar el dispositivo de la base de datos
      const status = await deviceService.getStatusByDeviceId('Eliminado');
      console.log(status);
      await deviceService.updateDevice(deviceId, { statusId: status.statusId });
      return res.status(200).json({ message: "Device and image deleted successfully.", ok: true });
    } catch (error) {
      console.error("Error deleting device:", error);
      return res.status(500).json({ error: error.message });
    }
  }
);


router.put(
  "/desactivate/:id",
  authenticateToken,
  async (req, res) => {
    const deviceId = req.params.id;

    try {
      // Obtener el dispositivo de la base de datos

      const device = await deviceService.getDeviceById(deviceId);
      const { userId } = req.user; 
      const {signature, observation} = req.body;
      console.log(userId);
      // Eliminar el dispositivo de la base de datos
      const status = await deviceService.getStatusByDeviceId('No Disponible');
      await deviceService.updateDevice(deviceId, { statusId: status.statusId });

      const userAdmin = await userService.getUserByRole(1);
      const userMonitor = await userService.getUserById(userId);
      createPDF( userMonitor.name, userMonitor.email ,device.name, device.deviceId, observation,  signature);
      for (let i = 0; i < userAdmin.length; i++) {
        await sendDeviceDeactivationReport(
          userAdmin[i].email, // Enviar a los administradores
          userMonitor.name,
          device.name,
          device.deviceId,
          observation,
      );
      }
    //   await sendDeviceDeactivationReport(
    //     'juangamerospina@gmail.com', // Enviar a los administradores
    //     userMonitor.name,
    //     device.name,
    //     device.deviceId,
    //     'Desactivado',
    //     'Juan Pérez' // Firma
    // );
    fs.unlink('reporte_inactivacion.pdf', (err) => {
      if (err) {
        console.error("Error al eliminar el archivo PDF:", err);
      } else {
        console.log("Archivo PDF eliminado correctamente.");
      }
    });
      return res.status(200).json({ message: "Device successfully deactivated.", ok: true });
    } catch (error) {
      console.error("Error disabling device:", error);
      return res.status(500).json({ error: error.message });
    }
  }
);

router.get('/get-device/:deviceId', authenticateToken, async (req, res) => {
  try {
    const { deviceId } = req.params;
    const device = await deviceService.getDeviceByIdWithAll(deviceId);
    return res.status(200).json(device);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
);


router.put('/update-device/:deviceId', authenticateToken, async (req, res) => {
  try {
    const { deviceId } = req.params;
    const data = req.body;
    const device = await deviceService.updateDevice(deviceId, data);
    return res.status(200).json({ message: "Device updated successfully", ok: true });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
);
export default router;
