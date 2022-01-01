import asyncHandler from 'express-async-handler';
import Recipe from '../models/recipeModel.js';

// @desc    Fetch all recipe
// @route   GET /api/recipe
// @access  Public
const getRecipes = asyncHandler(async (req, res) => {
  const recipe = await Recipe.find({});

  res.json({ recipe });
});

export { getRecipes };
