import { DataTypes } from 'sequelize';
import {sequelize} from '../lib/connection.js'; // Ajusta la ruta al archivo de instancia de Sequelize

const User = sequelize.define('User', {
  userId: {
    type: DataTypes.STRING(20),
    primaryKey: true,
    allowNull: false,
    field: 'user_id',
  },
  name: {
    type: DataTypes.STRING(50), // Limitar a 50 caracteres si es VARCHAR(50) en la BD
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(50), // Limitar a 50 caracteres si es VARCHAR(50)
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING(255), // Agregamos el campo de password
    allowNull: false,
  },
  active: {
    type: DataTypes.BOOLEAN, 
    allowNull: false,
    defaultValue: true,
  },
  token: {
    type: DataTypes.STRING(255), // Agregamos el campo de token
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
  roleId: {
    type: DataTypes.INTEGER, // Relación con la tabla 'roles'
    field: 'role_id',
    references: {
      model: 'roles',         // Nombre de la tabla referenciada
      key: 'id',              // Clave primaria en la tabla 'roles'
    },
    onDelete: 'SET NULL',     // Acción en cascada si se elimina el rol
  },
}, {
  tableName: 'users',
  timestamps: true,            // Esto ya gestiona createdAt y updatedAt automáticamente
});


export default User;
