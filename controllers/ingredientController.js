import asyncHandler from 'express-async-handler';
import Ingredient from '../models/ingredientModel.js';

// @desc    Fetch all ingredient
// @route   GET /api/ingredient
// @access  Public
const getIngredients = asyncHandler(async (req, res) => {
  const ingredient = await Ingredient.find({});

  res.json({ ingredient });
});

export { getIngredients };
