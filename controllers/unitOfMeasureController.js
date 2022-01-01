import asyncHandler from 'express-async-handler';
import UnitOfMeasure from '../models/unitOfMeasureModel.js';

// @desc    Fetch all unitsOfMeasure
// @route   GET /api/unitOfMeasure
// @access  Public
const getUnitOfMeasure = asyncHandler(async (req, res) => {
  const unitOfMeasure = await UnitOfMeasure.find({});

  res.json({ unitOfMeasure });
});

// @desc    Fetch one unitsOfMeasure
// @route   GET /api/unitOfMeasure/:name
// @access  Public
const findByNameUnitOfMeasure = asyncHandler(async (req, res) => {
  const unitOfMeasure = await UnitOfMeasure.findOne({ name: req.params.name });

  if (unitOfMeasure) {
    res.json(unitOfMeasure);
  } else {
    res.status(404);
    throw new Error('Unit of measure not found');
  }
});

// @desc    Create a unitOfMeasure
// @route   POST /api/unitOfMeasure
// @access  Private/Admin
const createUnitOfMeasure = asyncHandler(async (req, res) => {
  const unitOfMeasure = new UnitOfMeasure({
    name: 'Sample Name',
    abbreviation: 'a',
    gallon: 0,
    liters: 0,
    milliliters: 0,
    pint: 0,
    quart: 0,
    cup: 0,
    fluidOz: 0,
    tablespoon: 0,
    teaspoon: 0,
  });

  const createdUnitOfMeasure = await unitOfMeasure.save();
  res.status(201).json(createdUnitOfMeasure);
});

export { getUnitOfMeasure, findByNameUnitOfMeasure, createUnitOfMeasure };
