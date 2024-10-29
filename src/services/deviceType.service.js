import DeviceType from "../models/deviceType.model.js";

export class DeviceTypeService {
  constructor() {}

  // Método para obtener un rol por su ID
  async getDeviceTypeById(deviceTypeId) {
    try {
      const deviceType = await DeviceType.findByPk(deviceTypeId);
      if (!deviceType) {
        throw new Error("Device type not found");
      }
      return deviceType;
    } catch (error) {
      throw new Error(`Error fetching deviceType: ${error.message}`);
    }
  }

  async getDeviceType() {
    try {
      const deviceType = await DeviceType.findAll();
      if (!deviceType) {
        throw new Error("Device type not found");
      }
      return deviceType;
    } catch (error) {
      throw new Error(`Error fetching deviceType: ${error.message}`);
    }
  }

  async createDeviceType(data) {
    try {
      const deviceType = await DeviceType.create(data);
      return deviceType;
    } catch (error) {
      throw new Error(`Error creating device type: ${error.message}`);
    }
  }
}

// Exporta una instancia de la clase deviceTypeService
export default new DeviceTypeService();
