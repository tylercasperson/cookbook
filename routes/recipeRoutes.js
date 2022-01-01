import express from 'express';
const router = express.Router();
import {
  getRecipes,
  getOneRecipe,
  createRecipe,
  updateRecipe,
} from '../controllers/recipeController.js';

router.route('/').get(getRecipes).post(createRecipe);
router.route('/:id').get(getOneRecipe).put(updateRecipe);

export default router;
