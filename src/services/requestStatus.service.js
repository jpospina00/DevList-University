import RequestStatus from "../models/requestStatus.js";

export class RequestStatusService {
  constructor() {}

  async createRequestStatus(data,  options = {}) {
    try {
      const request = await RequestStatus.create(data, options);
      return request;
    } catch (error) {
      throw new Error(`Error creating RequestStatus: ${error.message}`);
    }
  }

  async updatedRequestStatus(data, options = {}) {
    try {
        const [affectedCount] = await RequestStatus.update(data, options);
        if (affectedCount === 0) {
            throw new Error("No rows updated. Please check the request ID.");
        }
        return affectedCount; // Puedes retornar el número de filas afectadas si lo deseas
    } catch (error) {
        throw new Error(`Error updating RequestStatus: ${error.message}`);
    }
}

  async getRequestStatus(where) {
    try {
      const request = await RequestStatus.findAll(where);
      if (!request) {
        throw new Error("RequestStatus not found");
      }
      return request;
    } catch (error) {
      throw new Error(`Error getting RequestStatus: ${error.message}`);
    }
  }
}


// Exporta una instancia de la clase RequestStatusService
export default new RequestStatusService();
