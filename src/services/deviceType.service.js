import DeviceType from "../models/deviceType.model.js";

export class DeviceTypeService {
  constructor() {}

  // Método para obtener un rol por su ID
  async getDeviceTypeById(deviceTypeId) {
    try {
      const role = await DeviceType.findByPk(deviceTypeId);
      if (!role) {
        throw new Error("Device type not found");
      }
      return role;
    } catch (error) {
      throw new Error(`Error fetching role: ${error.message}`);
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

// Exporta una instancia de la clase RoleService
export default new DeviceTypeService();
