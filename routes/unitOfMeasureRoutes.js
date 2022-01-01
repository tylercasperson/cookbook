import express from 'express';
const router = express.Router();
import {
  getUnitOfMeasure,
  getOneUnitOfMeasure,
  findByNameUnitOfMeasure,
  createUnitOfMeasure,
  updateUnitOfMeasure,
} from '../controllers/unitOfMeasureController.js';

router.route('/').get(getUnitOfMeasure).post(createUnitOfMeasure);
router.route('/:id').get(getOneUnitOfMeasure).put(updateUnitOfMeasure);
router.route('/:name').get(findByNameUnitOfMeasure);

export default router;
