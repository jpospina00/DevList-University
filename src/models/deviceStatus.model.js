import { DataTypes } from "sequelize";
import { sequelize } from "../lib/connection.js";

const DeviceStatus = sequelize.define(
  "DeviceStatus",
  {
    statusId: {
    type: DataTypes.INTEGER,
        autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      field: "status_id",
    },
    name: {
        type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
  },
  {
    tableName: "device_status",
    timestamps: false, 
  }
);


export default DeviceStatus;
