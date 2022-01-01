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

// @desc    Create a recipe
// @route   POST /api/recipe
// @access  Private/Admin
const createRecipe = asyncHandler(async (req, res) => {
  const recipe = new Recipe({
    name: 'Sample Name',
    description: 'Sample description',
    category: 'Sample Category',
    ingredients: [
      {
        ingredient: 'ingredient',
        quantity: 1,
        unitOfMeasure: '61cfb372e0c2e2ff6af94c5b',
      },
    ],
    toolsNeeded: ['sample tool', 'sample tool'],
    instructions: [
      {
        title: 'Title',
        group: ['Step One', 'Step Two'],
      },
    ],
    source: 'Sample source',
  });

  const createdRecipe = await recipe.save();
  res.status(201).json(createdRecipe);
});

export { getRecipes, getOneRecipe, createRecipe };
