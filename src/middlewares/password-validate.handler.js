import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export default async (req, res, next) => {
    try {
        const user = await User.findByPk(req.user.userId);
        if (bcrypt.compareSync(req.body.password, user.password)) {
            req.user = user;
            return next();
        }
    } catch (error) {
        return res.status(401).json({ message: "Invalid Password!", error: true });
    }
}