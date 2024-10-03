import { DataTypes } from "sequelize";
import { sequelize } from "../lib/connection.js";
import Device from "./device.model.js";
import Stock from "./stock.model.js";

const DeviceType = sequelize.define(
  "DeviceType",
  {
    deviceTypeId: {
    type: DataTypes.INTEGER,
        autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      field: "device_type_id",
    },
    name: {
        type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
  },
  {
    tableName: "device_types",
    timestamps: false, 
  }
);
// DeviceType.hasMany(Device, { foreignKey: 'deviceTypeId' }); // Un tipo de dispositivo puede tener muchos dispositivos
// DeviceType.hasMany(Stock, { foreignKey: 'deviceTypeId' });

export default DeviceType;
