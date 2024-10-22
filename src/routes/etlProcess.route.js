import { Router } from 'express';
import { etlProcess } from '../controllers/etlProcess.controller.js';

const etlRoute = Router();

etlRoute.route('/send').post(etlProcess);

export { etlRoute };