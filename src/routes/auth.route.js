import express from "express";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
import crypto from "crypto";

import UserService from "../services/user.service.js";
import { config } from "../config/config.js";
import { validateRequestBody } from "../middlewares/validate.handler.js";
import loginSchema from "../schemas/auth.schema.js";
import { sendPasswordResetEmail } from "../tools/emails.js";
import { recoveryPasswordSchema } from "../schemas/user.schema.js";

const router = express.Router();
const userService = new UserService();

/**
 * Generates a JSON Web Token (JWT) with the provided user information.
 *
 * @param {Object} userAuthenticated - The authenticated user object.
 * @param {string} userAuthenticated.userId - The user's ID.
 * @param {string} userAuthenticated.email - The user's email.
 * @param {string} userAuthenticated.roleId - The user's role ID.
 * @param {string} config.jwtSecret - The secret key used to sign the token.
 * @returns {string} The generated JWT.
 */
router.post("/login",validateRequestBody(loginSchema), async (req, res) => {
  try {
    const { email, password } = req.body;
    const userAuthenticated = await userService.getUserByEmail(email);
    if(userAuthenticated.active == false) {
      return res.status(401).json({ message: "User is not active", error: true });
    }
    const isMatch = await bcrypt.compare(password, userAuthenticated.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid password", error: true });
    }

    const token = jwt.sign(
      {
        userId: userAuthenticated.userId,
        email: userAuthenticated.email,
        role: userAuthenticated.roleId,
      },
      config.jwtSecret, // La clave secreta
      { expiresIn: '24h' } // Tiempo de expiración
    );
    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    res.status(401).json({ message: "Invalid credentials", error: true});
  }
});

/**
     * Generates a JSON Web Token (JWT) for an authenticated user.
     *
     * @param {Object} userAuthenticated - The authenticated user object.
     * @param {string} userAuthenticated.userId - The ID of the authenticated user.
     * @param {string} userAuthenticated.email - The email of the authenticated user.
     * @param {number} userAuthenticated.roleId - The role ID of the authenticated user.
     * @param {Object} config - The configuration object.
     * @param {string} config.jwtSecret - The secret key used to sign the JWT.
     * @returns {string} The generated JWT.
     */
    
router.post('/send-email-recovery',validateRequestBody(recoveryPasswordSchema), async (req, res) => {
  try {
    const { email } = req.body;
    const userAuthenticated = await userService.getUserByEmail(email);
    const token = jwt.sign(
      {
        userId: userAuthenticated.userId,
        email: userAuthenticated.email,
        role: userAuthenticated.roleId,
      },
      config.jwtSecret, // La clave secreta
      { expiresIn: '1h' } // Tiempo de expiración
    );
    await sendPasswordResetEmail( email, userAuthenticated.name, token);
    res.status(200).json({ message: "Email sent"});
  } catch (error) {
    res.status(500).json({ message: error.message, error: true });
  }
});

export default router;
