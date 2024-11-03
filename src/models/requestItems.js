import { DataTypes } from 'sequelize';
import { sequelize } from '../lib/connection.js'; // Ajusta la ruta al archivo de instancia de Sequelize

const RequestItems = sequelize.define('RequestItems', {
  requestItemId: {
    type: DataTypes.INTEGER,    // Asumiendo que device_id es un entero
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,        // Suponiendo que es autoincremental
    field: 'request_item_id',
  },
  requestId: {
    type: DataTypes.INTEGER, 
    allowNull: false,
    field: 'request_id',
    references: {
        model: 'requests',
        key: 'request_id',
    },
    onDelete: 'SET NULL',
  },
  deviceId: {
    type: DataTypes.INTEGER, 
    allowNull: false,
    field: 'device_id',
    references: {
        model: 'devices',
        key: 'device_id',
    },
    onDelete: 'SET NULL',
  },
    quantity: {
        type: DataTypes.INTEGER, 
        allowNull: false,
        field: 'quantity',
    },
  returnCommentTeacher: {
    type: DataTypes.STRING(),    // Relación con la tabla 'device_types'
    allowNull: true,
    field: 'return_comment_teacher',
  },
  returnCommentMonitor: {
    type: DataTypes.STRING(),    // Relación con la tabla 'device_types'
    allowNull: true,
    field: 'return_comment_monitor',
  },
}, {
  tableName: 'request_items',          // Nombre de la tabla en la BD
  timestamps: false,
});

export default RequestItems;
