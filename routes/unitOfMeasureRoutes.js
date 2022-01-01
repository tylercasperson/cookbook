import express from 'express';
const router = express.Router();
import { getUnitOfMeasure } from '../controllers/unitOfMeasureController.js';

router.route('/').get(getUnitOfMeasure);

export default router;
