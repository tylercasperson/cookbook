import express from 'express';
const router = express.Router();
import { getRecipes } from '../controllers/recipeController.js';

router.route('/').get(getRecipes);

export default router;
