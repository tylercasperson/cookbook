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

export { getUnitOfMeasure, findByNameUnitOfMeasure };
