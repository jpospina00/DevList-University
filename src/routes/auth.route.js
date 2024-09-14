import express from "express";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
import UserService from "../services/user.service.js";
import { config } from "../config/config.js";

const router = express.Router();
const userService = new UserService();

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const userAuthenticated = await userService.getUserByEmail(email);
    const isMatch = await bcrypt.compare(password, userAuthenticated.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }
    const token = jwt.sign(
      {
        userId: userAuthenticated.id,
        email: userAuthenticated.email,
        role: userAuthenticated.role,
      },
      config.jwtSecret, // La clave secreta
      { expiresIn: '1m' } // Tiempo de expiración
    );
    console.log(userAuthenticated.dataValues);
    console.log(token);
    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: "Invalid credentials" });
  }
});

export default router;
