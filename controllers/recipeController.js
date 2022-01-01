import asyncHandler from 'express-async-handler';
import Recipe from '../models/recipeModel.js';

// @desc    Fetch all recipe
// @route   GET /api/recipe
// @access  Public
const getRecipes = asyncHandler(async (req, res) => {
  const recipe = await Recipe.find({});

  res.json({ recipe });
});

// @desc    Fetch one recipe
// @route   GET /api/recipe/:id
// @access  Public
const getOneRecipe = asyncHandler(async (req, res) => {
  const recipe = await Recipe.findOne({ id: req.params.id });

  if (recipe) {
    res.json(recipe);
  } else {
    res.status(404);
    throw new Error('Recipe not found');
  }
});

export { getRecipes, getOneRecipe };
