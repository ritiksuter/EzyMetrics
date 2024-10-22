import { Router } from 'express';
import { generateCSVReport, genratePDFReport } from '../controllers/report.controller.js';

const router = Router();

router.route('/csv').get(generateCSVReport);
router.route('/pdf').get(genratePDFReport);

export default router;