import { DataTypes } from 'sequelize';
import { sequelize } from '../lib/connection.js'; // Ajusta la ruta al archivo de instancia de Sequelize

const Requests = sequelize.define('Requests', {
  requestId: {
    type: DataTypes.INTEGER,    // Asumiendo que device_id es un entero
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,        // Suponiendo que es autoincremental
    field: 'request_id',
  },
  monitorId: {
    type: DataTypes.INTEGER, 
    allowNull: false,
    field: 'monitor_id',
    references: {
      model: 'users',
      key: 'user_id',
    },
    onDelete: 'SET NULL',
  },
  teacherId: {
    type: DataTypes.INTEGER,    // Relación con la tabla 'device_types'
    allowNull: false,
    field: 'teacher_id',
    references: {
        model: 'users',    // Nombre de la tabla referenciada
        key: 'user_id',                // Clave primaria en la tabla referenciada
    },
    onDelete: 'SET NULL',      
  },
  requestDate: {
    type: DataTypes.DATE,    // Relación con la tabla 'warehouses'
    allowNull: false,
    field: 'request_date',
  },
  requestTime: {
    type: DataTypes.TIME,  // Limitar a 50 caracteres si es VARCHAR(50) en la BD
    allowNull: false,
    field: 'request_time',
  },
  hoursRequested: {
    type: DataTypes.INTEGER,     // Relación con la tabla 'statuses'
    allowNull: false,
    field: 'hours_requested',
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
  tableName: 'requests',          // Nombre de la tabla en la BD
  timestamps: true,              // createdAt y updatedAt se gestionan automáticamente
});

export default Requests;
