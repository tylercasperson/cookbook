import express from 'express';
const router = express.Router();
import { getRecipes, getOneRecipe } from '../controllers/recipeController.js';

router.route('/').get(getRecipes);
router.route('/:id').get(getOneRecipe);

export default router;
