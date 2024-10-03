import { DataTypes } from "sequelize";
import { sequelize } from "../lib/connection.js";

const Warehouse = sequelize.define(
  "Warehouse",
  {
    warehouseId: {
    type: DataTypes.INTEGER,
        autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      field: "warehouse_id",
    },
    name: {
        type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
  },
  {
    tableName: "warehouses",
    timestamps: false, 
  }
);

export default Warehouse;
