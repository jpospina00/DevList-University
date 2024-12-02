import Device from "../models/device.model.js";
import Requests from "../models/request.model.js";
import RequestItems from "../models/requestItems.js";
import RequestStatus from "../models/requestStatus.js";
import "../models/associations.js";
import { Op } from "sequelize";

export class RequestService {
  constructor() {}

  async createRequest(data,  options = {}) {
    try {
      const request = await Requests.create(data, options);
      return request;
    } catch (error) {
      throw new Error(`Error creating Requests: ${error.message}`);
    }
  }

  async updatedRequest(requestId, data, options = {}) {
    try {
      console.log(requestId, data, options);
      const [request] = await Requests.update(data, { where: { requestId }, ...options });
      if (request === 0) {
        throw new Error("Request not found");
      }
      return request;
    } catch (error) {
      throw new Error(`Error updating Requests: ${error.message}`);
    }
  }

  async addMonitorToRequest(requestId, monitorId) {
    console.log(requestId, monitorId);
    try {
      const [request] = await Requests.update(
        { monitorId },
        { where: { requestId }}
      );
      if (request === 0) {
        throw new Error("Request not found");
      }
      return request;
    } catch (error) {
      throw new Error(`Error adding monitor to Requests: ${error.message}`);
    }
  }

  async getRequestByTeacherId(where) {
    try {
      const request = await Requests.findAll(where);
      if (!request) {
        throw new Error("Request not found");
      }
      return request;
    } catch (error) {
      throw new Error(`Error getting Requests: ${error.message}`);
    }
  }

  async getAllRequests() {
    try {
      const requests = await Requests.findAll();
      return requests;
    } catch (error) {
      throw new Error(`Error getting Requests: ${error.message}`);
    }
  }

  async getDevicesWithWaitedStatus (status) {
    try {
      const result = await Requests.findAll({
        include: [
          {
            model: RequestStatus,
            status: { [Op.or]: [status] },// Filtrar por status 'Waited'
            attributes: ['status', 'statusTimestamp'],
          required: true, // Asegura que solo se incluyan Requests con los estados deseados
          // Solo incluye el estado más reciente
          order: [['statusTimestamp', 'DESC']],
          limit: 1,
          },
          {
            model: RequestItems,
            include: [
              {
                model: Device,
                attributes: ['deviceId', 'name'], // Campos necesarios del dispositivo
              },
            ],
          },
        ],
      });
  
      return result;
    } catch (error) {
      console.error('Error fetching devices with Waited status:', error);
      throw error;
    }
  };
}



// Exporta una instancia de la clase RequestService
export default new RequestService();
