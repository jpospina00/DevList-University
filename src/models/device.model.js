import { DataTypes } from 'sequelize';
import { sequelize } from '../lib/connection.js'; // Ajusta la ruta al archivo de instancia de Sequelize

const Device = sequelize.define('Device', {
  deviceId: {
    type: DataTypes.INTEGER,    // Asumiendo que device_id es un entero
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,        // Suponiendo que es autoincremental
    field: 'device_id',
  },
  name: {
    type: DataTypes.STRING(100), // Limitar a 100 caracteres si es VARCHAR(100) en la BD
    allowNull: false,
  },
  deviceTypeId: {
    type: DataTypes.INTEGER,    // Relación con la tabla 'device_types'
    allowNull: false,
    field: 'device_type_id',
    references: {
      model: 'device_types',    // Nombre de la tabla referenciada
      key: 'device_type_id',                // Clave primaria en la tabla referenciada
    },
    onDelete: 'SET NULL',       // Acción cuando se elimina el tipo de dispositivo
  },
  warehouseId: {
    type: DataTypes.INTEGER,    // Relación con la tabla 'warehouses'
    allowNull: false,
    field: 'warehouse_id',
    references: {
      model: 'warehouses',      // Nombre de la tabla referenciada
      key: 'warehouse_id',                // Clave primaria en la tabla referenciada
    },
    onDelete: 'SET NULL',       // Acción cuando se elimina el almacén
  },
  brand: {
    type: DataTypes.STRING(50),  // Limitar a 50 caracteres si es VARCHAR(50) en la BD
    allowNull: false,
  },
  statusId: {
    type: DataTypes.INTEGER,     // Relación con la tabla 'statuses'
    allowNull: false,
    field: 'status_id',
    references: {
      model: 'statuses',         // Nombre de la tabla referenciada
      key: 'status_id',                 // Clave primaria en la tabla referenciada
    },
    onDelete: 'SET NULL',        // Acción cuando se elimina el estado
  },
  urlPicture: {
    type: DataTypes.STRING(255), // URL de la imagen
    allowNull: true,
    field: 'url_picture',
  },
  description: {
    type: DataTypes.TEXT,        // Asumo que es un campo de texto largo
    allowNull: true,
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
}, {
  tableName: 'devices',          // Nombre de la tabla en la BD
  timestamps: true,              // createdAt y updatedAt se gestionan automáticamente
});

export default Device;
