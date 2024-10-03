import { DataTypes } from 'sequelize';
import { sequelize } from '../lib/connection.js'; // Ajusta la ruta al archivo de instancia de Sequelize
import DeviceType from './deviceType.model.js';

const Stock = sequelize.define('Stock', {
  stockId: {
    type: DataTypes.INTEGER,    // Asumiendo que device_id es un entero
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,        // Suponiendo que es autoincremental
    field: 'stock_id',
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
  quantity: {
    type: DataTypes.INTEGER,    // Relación con la tabla 'warehouses'
    allowNull: false,
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
  tableName: 'stock',          // Nombre de la tabla en la BD
  timestamps: true,              // createdAt y updatedAt se gestionan automáticamente
});

// DeviceType.hasMany(Stock, { foreignKey: 'deviceTypeId' });
// Stock.belongsTo(DeviceType, { foreignKey: 'deviceTypeId' });

export default Stock;
