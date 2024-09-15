import User from '../models/user.model.js'; // Ajusta la ruta según tu estructura

class UserService {
  constructor() {
    // Puedes inicializar otros recursos si es necesario
  }

  async createUser(data) {
    try {
      const user = await User.create(data);
      return user;
    } catch (error) {
      throw new Error(`Error creating user: ${error.message}`);
    }
  }

  async getAllUsers() {
    try {
      const users = await User.findAll();
      return users;
    } catch (error) {
      throw new Error(`Error fetching users: ${error.message}`);
    }
  }

  async getUserById(id) {
    try {
      const user = await User.findByPk(id);
      if (!user) {
        throw new Error('User not found');
      }
      return user;
    } catch (error) {
      throw new Error(`Error fetching user: ${error.message}`);
    }
  }

  async getUserByEmail(email) {
    try {
      const user = await User.findOne({ where: { email: email } });
      if (!user) {
        throw new Error('User not found');
      }
      return user;
    } catch (error) {
      throw new Error(`Error fetching user: ${error.message}`);
    }
  }

  async updateUser(id, data) {
    try {
      const [updated] = await User.update(data, { where: { userId: id }, returning: true });
      if (updated === 0) {
        throw new Error('User not found');
      }
      return updated;
    } catch (error) {
      throw new Error(`Error updating user: ${error.message}`);
    }
  }

  async deleteUser(userId) {
    try {
      const deleted = await User.destroy({ where: { userId } });
      if (deleted === 0) {
        throw new Error('User not found');
      }
    } catch (error) {
      throw new Error(`Error deleting user: ${error.message}`);
    }
  }
}

export default UserService;