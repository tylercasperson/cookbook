import express from 'express';
const router = express.Router();
import {
  getUnitOfMeasure,
  findByNameUnitOfMeasure,
} from '../controllers/unitOfMeasureController.js';

router.route('/').get(getUnitOfMeasure);
router.route('/:name').get(findByNameUnitOfMeasure);

export default router;
