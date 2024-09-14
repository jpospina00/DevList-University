import { DataTypes } from "sequelize";
import { sequelize } from "../lib/connection.js";

const Role = sequelize.define(
  "Role",
  {
    roleId: {
    type: DataTypes.INTEGER,
        autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      field: "role_id",
    },
    name: {
        type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
  },
  {
    tableName: "roles",
    timestamps: false, 
  }
);

export default Role;
