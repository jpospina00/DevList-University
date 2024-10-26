import { DataTypes } from "sequelize";
import { sequelize } from "../lib/connection.js";

const MonitorSchedule = sequelize.define(
  "MonitorSchedule",
  {
    monitorScheduleId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      field: "schedule_id",
    },
    day: {
      type: DataTypes.STRING(10),
      allowNull: false,
      unique: true,
    },
    monitorId: {
      type: DataTypes.INTEGER, // Relación con la tabla 'device_types'
      allowNull: false,
      field: "monitor_id",
      references: {
        model: "users", // Nombre de la tabla referenciada
        key: "user_id", // Clave primaria en la tabla referenciada
      },
      onDelete: "SET NULL",
    },
    startTime: {
      type: DataTypes.TIME,
      allowNull: false,
      field: "start_time",
    },
    endTime: {
      type: DataTypes.TIME,
      allowNull: false,
      field: "end_time",
    },
    active: {
      type: DataTypes.STRING(),
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      field: 'created_at',
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      field: 'updated_at',
    },
  },
  {
    tableName: "monitor_schedule",
    timestamps: false,
  }
);

export default MonitorSchedule;
