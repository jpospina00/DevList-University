import DeviceType from "../models/deviceType.model.js";
import Warehouse from "../models/warehouse.model.js";

export class WarehouseService {
  constructor() {}

  async getWarehouses() {
    try {
      const warehouse = await Warehouse.findAll();
      if (!warehouse) {
        throw new Error("Device type not found");
      }
      return warehouse;
    } catch (error) {
      throw new Error(`Error fetching warehouse: ${error.message}`);
    }
  }
  async createWarehouses(data) {
    try {
      const deviceType = await DeviceType.create(data);
      return deviceType;
    } catch (error) {
      throw new Error(`Error creating device type: ${error.message}`);
    }
  }

  async getWarehouseById(id) {
    try {
      const warehouse = await Warehouse.findByPk(id);
      if (!warehouse) {
        throw new Error("Warehouse not found");
      }
      return warehouse;
    } catch (error) {
      throw new Error(`Error fetching warehouse: ${error.message}`);
    }
  }
}

// Exporta una instancia de la clase RoleService
export default new WarehouseService();
