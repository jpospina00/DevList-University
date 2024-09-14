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
      return res.status(401).json({ message: "Invalid password", error: true });
    }
    console.log(userAuthenticated);
    const token = jwt.sign(
      {
        userId: userAuthenticated.userId,
        email: userAuthenticated.email,
        role: userAuthenticated.roleId,
      },
      config.jwtSecret, // La clave secreta
      { expiresIn: '24h' } // Tiempo de expiración
    );
    console.log(userAuthenticated.dataValues);
    console.log(token);
    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    res.status(401).json({ message: "Invalid credentials", error: true});
  }
});

export default router;
