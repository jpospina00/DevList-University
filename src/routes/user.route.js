import express from "express";
import bcrypt from "bcryptjs";

import crypto from "crypto";
import UserService from "../services/user.service.js";
import authenticateToken from "../middlewares/auth.handler.js";
import { error } from "console";

const router = express.Router();
const userService = new UserService();

router.get("/",authenticateToken, async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/create-user", async (req, res) => {
  try {
    const { identificationNumber, name, email, roleId } = req.body;
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

export default router;
