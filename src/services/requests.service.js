import Requests from "../models/request.js";

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
}

// Exporta una instancia de la clase RequestService
export default new RequestService();
