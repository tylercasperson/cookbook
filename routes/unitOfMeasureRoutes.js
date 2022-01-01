import express from 'express';
const router = express.Router();
import {
  getUnitOfMeasure,
  getOneUnitOfMeasure,
  findByNameUnitOfMeasure,
  createUnitOfMeasure,
  updateUnitOfMeasure,
  deleteUnitOfMeasure,
} from '../controllers/unitOfMeasureController.js';

router.route('/').get(getUnitOfMeasure).post(createUnitOfMeasure);
router.route('/:id').get(getOneUnitOfMeasure).put(updateUnitOfMeasure).delete(deleteUnitOfMeasure);
router.route('/:name').get(findByNameUnitOfMeasure);

export default router;
