import Device from '../models/device.model.js'; // Ajusta la ruta según tu estructura

class DeviceService {
  constructor() {
    // Inicializa otros recursos si es necesario
  }

  async createDevice(data) {
    try {
      const device = await Device.create(data);
      return device;
    } catch (error) {
      throw new Error(`Error creating device: ${error.message}`);
    }
  }

  async getAllDevices() {
    try {
      const devices = await Device.findAll();
      return devices;
    } catch (error) {
      throw new Error(`Error fetching devices: ${error.message}`);
    }
  }

  async getDeviceById(id) {
    try {
      const device = await Device.findByPk(id);
      if (!device) {
        throw new Error('Device not found');
      }
      return device;
    } catch (error) {
      throw new Error(`Error fetching device: ${error.message}`);
    }
  }

  async updateDevice(id, data) {
    try {
      const [updated] = await Device.update(data, { where: { device_id: id }, returning: true });
      if (updated === 0) {
        throw new Error('Device not found');
      }
      return updated;
    } catch (error) {
      throw new Error(`Error updating device: ${error.message}`);
    }
  }

  async deleteDevice(deviceId) {
    try {
      const deleted = await Device.destroy({ where: { device_id: deviceId } });
      if (deleted === 0) {
        throw new Error('Device not found');
      }
    } catch (error) {
      throw new Error(`Error deleting device: ${error.message}`);
    }
  }
}

export default DeviceService;
