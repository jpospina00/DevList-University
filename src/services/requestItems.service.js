import RequestItems from "../models/requestItems.js";

export class RequestItemsService {
  constructor() {}

  async createRequestItems(data,  options = {}) {
    try {
      if (Array.isArray(data)) {
        // Usa bulkCreate si data es un array
        const requests = await RequestItems.bulkCreate(data, options);
        return requests;
      } else {
        // Crea un solo ítem si data no es un array
        const request = await RequestItems.create(data, options);
        return request;
      }
    } catch (error) {
      throw new Error(`Error creating RequestItems: ${error.message}`);
    }
  }
}

export default new RequestItemsService();
