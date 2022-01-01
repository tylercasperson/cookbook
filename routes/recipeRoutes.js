import express from 'express';
const router = express.Router();
import {
  getRecipes,
  getOneRecipe,
  createRecipe,
  updateRecipe,
  deleteRecipe,
} from '../controllers/recipeController.js';

router.route('/').get(getRecipes).post(createRecipe);
router.route('/:id').get(getOneRecipe).put(updateRecipe).delete(deleteRecipe);

export default router;
