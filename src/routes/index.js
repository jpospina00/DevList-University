import express from 'express';
import userRoutes from './user.route.js';

function routerApi(app) {
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/user', userRoutes);
}

export default routerApi;