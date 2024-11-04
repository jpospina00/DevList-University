import Role from "../models/role.model.js";

export class RoleService {
  constructor() {}

  // Método para obtener un rol por su ID
  async getRoleById(roleId) {
    try {
      const role = await Role.findByPk(roleId);
      if (!role) {
        throw new Error("Role not found");
      }
      return role;
    } catch (error) {
      throw new Error(`Error fetching role: ${error.message}`);
    }
  }

  // Método para obtener todos los roles
  async getAllRoles() {
    try {
      return await Role.findAll();
    } catch (error) {
      throw new Error(`Error fetching roles: ${error.message}`);
    }
  }
}

// Exporta una instancia de la clase RoleService
export default new RoleService();
