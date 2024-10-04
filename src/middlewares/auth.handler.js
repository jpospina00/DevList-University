import jwt from 'jsonwebtoken';
import { config } from '../config/config.js';

const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(403).json({ message: 'Token not provided', error: true });
    }

    try {
        const verified = jwt.verify(token.split(' ')[1], config.jwtSecret); // Extrae el token del header
        req.user = verified; // Almacena los datos del usuario en `req.user`
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token', error: true });
    }
};

export default authenticateToken;