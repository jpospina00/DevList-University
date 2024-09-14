



import express from "express";
import bcrypt from "bcryptjs";

import crypto from "crypto";
import UserService from "../services/user.service.js";
import authenticateToken from "../middlewares/auth.handler.js";
import { RoleService } from "../services/role.service.js";


const router = express.Router();
const userService = new UserService();
const roleService = new RoleService();

/**
 * Retrieves all users.
 * @function
 * @name getAllUsers
 * @memberof module:user.route
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - The response object with the list of users.
 * @throws {Object} - The error object if an error occurs.
 */

router.get("/",authenticateToken, async (_, res) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * Creates a new user.
 * 
 * @function
 * @name createUser
 * @memberof module:user.route
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - The response object with a success message.
 * @throws {Object} - The error object if an error occurs.
 */

router.post("/create-user",authenticateToken, async (req, res) => {
  try {
    const { identificationNumber, name, email, roleId } = req.body;
    const { role } = req.user; 
    if (!role) {
      return res.status(403).json({ message: "Role information missing from token", error: true });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email format", error: true });
    }
    const randomPassword = process.env.NODE_ENV === 'test' 
    ? 'testpassword123' 
    : crypto.randomBytes(8).toString('hex');

    const hashedPassword = await bcrypt.hash(randomPassword, 10);

     await userService.createUser({
      userId: identificationNumber,
      name,
      email,
      roleId: roleId,
      password: hashedPassword, 
    });
    res.status(201).json({ message: "Create user successful" });
  } catch (error) {
    res.status(401).json({ message: "Invalid credentials", error: true });
  }
});


/**
 * Disables a monitor by ID.
 * @function
 * @name disableMonitor
 * @memberof module:user.route
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - The response object with the updated user information.
 * @throws {Object} - The error object if an error occurs.
 */

router.patch("/disable-monitor/:id",authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const { role } = req.user; 
    if (!role) {
      return res.status(403).json({ message: "Role information missing from token", error: true });
    }
    const roleData = await roleService.getRoleById(role);
    if (roleData.name !== 'administrator') {
      return res.status(401).json({ message: "Unauthorized", error: true });
    }
    const updatedUser = await userService.updateUser(id, { active: false });
    res.status(200).json({
      name: updatedUser.name,
      active: updatedUser.active,
      roleId: updatedUser.roleId
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
