import express from "express";
import UserService from "../services/user.service.js";

const router = express.Router();
const userService = new UserService();

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
