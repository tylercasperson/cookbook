import express from 'express';
const router = express.Router();
import {
  getUnitOfMeasure,
  findByNameUnitOfMeasure,
  createUnitOfMeasure,
  updateUnitOfMeasure,
} from '../controllers/unitOfMeasureController.js';

router.route('/').get(getUnitOfMeasure).post(createUnitOfMeasure);
router.route('/:id').put(updateUnitOfMeasure);
router.route('/:name').get(findByNameUnitOfMeasure);

export default router;
