import express from 'express';
import userRoutes from './user.route.js';
import authRoutes from './auth.route.js';
import deviceRouter from './device.router.js';
import scheduleRouter from './schedule.route.js';


/**
 * Sets up the API routes for the application.
 *
 * @param {Object} app - The Express application instance.
 */
function routerApi(app) {
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/user', userRoutes);
    router.use('/auth', authRoutes);
    router.use('/device', deviceRouter);
    router.use('/schedule', scheduleRouter);
}

export default routerApi;