import express from 'express';

const router = express.Router();

router.post('/login', (req, res) => {
    try {
        const { email, password } = req.body;
        if(email === 'test@gmai.co' && password === '123456') {
            res.status(200).json({ message: 'Login successful' });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (error) {
        console.error(error);
    }
});

export default router;