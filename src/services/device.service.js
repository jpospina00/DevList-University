import Device from "../models/device.model.js"; // Ajusta la ruta según tu estructura
import "../models/associations.js";
import Stock from "../models/stock.model.js";
import DeviceType from "../models/deviceType.model.js";
import Warehouse from "../models/warehouse.model.js";
import { Op } from "sequelize";
import DeviceStatus from "../models/deviceStatus.model.js";

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

  async deleteAllDevices() {
    try {
      const devices = await Device.destroy({ where: {} });
      return devices;
    } catch (error) {
      throw new Error(`Error delete devices: ${error.message}`);
    }
  }

  async getDevicesByFilters(filters, page = 1, pageSize = 10) {
    try {
        // Aplicar filtro por nombre de dispositivo si está presente
        if (filters.name) {
            filters['$Device.name$'] = { [Op.iLike]: `%${filters.name}%` };
            delete filters.name; // Eliminar 'name' del filtro original
        }

        // Crear condición de inclusión dinámica para DeviceStatus si el filtro de deviceStatus está presente
        const includeDeviceStatus = {
            model: DeviceStatus,
            attributes: ['name'], // Obtener el nombre del estado del dispositivo
        };

        if (filters.deviceStatus) {
            includeDeviceStatus.where = { name: { [Op.iLike]: `%${filters.deviceStatus}%` } }; // Filtrar por nombre de estado sin distinción de mayúsculas/minúsculas
            delete filters.deviceStatus; // Eliminar 'deviceStatus' del filtro original para evitar conflictos
        }

        // Configurar paginación
        const offset = (page - 1) * pageSize; // Determina el inicio de la página
        const limit = pageSize; // Define el tamaño de la página

        const devices = await Device.findAndCountAll({
            where: filters,
            include: [
                {
                    model: DeviceType,
                    attributes: ['name'], // Obtener solo el nombre del tipo de dispositivo
                    include: [
                        {
                            model: Stock,
                            attributes: ['quantity'], // Obtener la cantidad de stock
                        },
                    ],
                },
                {
                    model: Warehouse, // Agregar la relación con Warehouse
                    attributes: ['name'], // Obtener solo el nombre del almacén
                },
                includeDeviceStatus, // Agregar la relación dinámica con DeviceStatus
            ],
            limit, // Tamaño de la página
            offset, // Desplazamiento
        });

        // Formatear el resultado para que incluya la información deseada
        const result = {
            totalItems: devices.count, // Número total de registros
            totalPages: Math.ceil(devices.count / pageSize), // Número total de páginas
            currentPage: page, // Página actual
            data: devices.rows.map(device => ({
                deviceId: device.deviceId,
                name: device.name,
                urlPicture: device.urlPicture,
                warehouseId: device.warehouseId,
                warehouseName: device.Warehouse ? device.Warehouse.name : null, // Nombre del almacén
                deviceTypeId: device.deviceTypeId,
                deviceTypeName: device.DeviceType.name,
                quantity: device.DeviceType.Stocks.length > 0 ? device.DeviceType.Stocks[0].quantity : null,
                deviceStatus: device.DeviceStatus ? device.DeviceStatus.name : null, // Estado del dispositivo
            })),
        };

        return result;
    } catch (error) {
        throw new Error(`Error fetching devices: ${error.message}`);
    }
}


  async getDeviceById(id) {
    try {
      const device = await Device.findByPk(id);
      if (!device) {
        throw new Error("Device not found");
      }
      return device;
    } catch (error) {
      throw new Error(`Error fetching device: ${error.message}`);
    }
  }

  async updateDevice(id, data) {
    try {
      const [updated] = await Device.update(data, {
        where: { device_id: id },
        returning: true,
      });
      if (updated === 0) {
        throw new Error("Device not found");
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
        throw new Error("Device not found");
      }
    } catch (error) {
      throw new Error(`Error deleting device: ${error.message}`);
    }
  }
}

export default DeviceService;
