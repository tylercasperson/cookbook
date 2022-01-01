import asyncHandler from 'express-async-handler';
import UnitOfMeasure from '../models/unitOfMeasureModel.js';

// @desc    Fetch all unitsOfMeasure
// @route   GET /api/unitOfMeasure
// @access  Public
const getUnitOfMeasure = asyncHandler(async (req, res) => {
  const unitOfMeasure = await UnitOfMeasure.find({});

  res.json({ unitOfMeasure });
});

export { getUnitOfMeasure };
