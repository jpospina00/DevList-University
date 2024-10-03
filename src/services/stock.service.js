import Stock from "../models/stock.model.js";
import '../models/associations.js'; 

class StockService {
  constructor() {
    // Inicializa otros recursos si es necesario
  }

  async createStock(data) {
    try {
      const device = await Stock.create(data);
      return device;
    } catch (error) {
      throw new Error(`Error creating device: ${error.message}`);
    }
  }

  async getAllStocks() {
    try {
      const stocks = await Stock.findAll();
      return stocks;
    } catch (error) {
      throw new Error(`Error fetching stocks: ${error.message}`);
    }
  }

  async deleteAllStocks() {
    try {
      const stocks = await Stock.destroy({ where: {} });
      return stocks;
    } catch (error) {
      throw new Error(`Error delete stocks: ${error.message}`);
    }
  }

  async getStocksByFilters(filters) {
    try {
      const stocks = await Stock.findAll({ where: filters });
      if (!stocks) {
        throw new Error("Stock not found");
      }
      return stocks;
    } catch (error) {
      throw new Error(`Error fetching stocks: ${error.message}`);
    }
  }

  async getStockById(id) {
    try {
      const stock = await Stock.findByPk(id);
      if (!stock) {
        throw new Error("Stock not found");
      }
      return stock;
    } catch (error) {
      throw new Error(`Error fetching stock: ${error.message}`);
    }
  }

  async updateStock(id, data) {
    try {
      const stock = await Stock.findByPk(id);
      if (!stock) {
        throw new Error("Stock not found");
      }
      const updatedStock = await stock.update(data);
      return updatedStock;
    } catch (error) {
      throw new Error(`Error updating stock: ${error.message}`);
    }
  }

  async updateOrCreateStock(data) {
    try {
      const [stock, created] = await Stock.findOrCreate({
        where: { deviceTypeId: data.deviceTypeId },
        defaults: data,
      });
      if (!created) {
        console.log("Stock already exists. Updating stock");
        data.quantity += parseInt(stock.quantity);
        console.log(data);
        await stock.update(data);
      }
      return stock;
    } catch (error) {
      throw new Error(`Error updating stock: ${error.message}`);
    }
  }
}

export default StockService;
