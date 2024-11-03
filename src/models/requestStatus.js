import { DataTypes } from 'sequelize';
import { sequelize } from '../lib/connection.js'; // Ajusta la ruta al archivo de instancia de Sequelize

const RequestStatus = sequelize.define('RequestStatus', {
  statusId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    field: 'status_id',
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
  status: {
    type: DataTypes.STRING(20),
    allowNull: false,
    field: 'status',
  },
  statusTimestamp: {
    type: DataTypes.DATE,
    allowNull: false,
    field: 'status_timestamp',
    defaultValue: DataTypes.NOW,
  }
}, {
  tableName: 'request_status',
  timestamps: false,
});

export default RequestStatus;