import express from "express";
import UserService from "../services/user.service.js";

const router = express.Router();
const userService = new UserService();

router.get("/", async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const userAuthenticated = await userService.getUserByEmail(email);
    console.log(userAuthenticated.dataValues);
    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: "Invalid credentials" });
  }
});

export default router;
