import express from 'express';
const router = express.Router();
import { getRecipes, getOneRecipe, createRecipe } from '../controllers/recipeController.js';

router.route('/').get(getRecipes).post(createRecipe);
router.route('/:id').get(getOneRecipe);

export default router;
