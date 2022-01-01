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

// @desc    Fetch one unitsOfMeasure
// @route   GET /api/unitOfMeasure/:id
// @access  Public
const getOneUnitOfMeasure = asyncHandler(async (req, res) => {
  const unitOfMeasure = await UnitOfMeasure.findOne({ id: req.params.id });

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

// @desc    Update a unitOfMeasure
// @route   PUT /api/unitOfMeasure/:id
// @access  Private/Admin
const updateUnitOfMeasure = asyncHandler(async (req, res) => {
  const {
    name,
    abbreviation,
    gallon,
    liters,
    milliliters,
    pint,
    quart,
    cup,
    fluidOz,
    tablespoon,
    teaspoon,
  } = req.body;

  const unitOfMeasure = await UnitOfMeasure.findById(req.params.id);

  if (unitOfMeasure) {
    unitOfMeasure.name = name;
    unitOfMeasure.abbreviation = abbreviation;
    unitOfMeasure.gallon = gallon;
    unitOfMeasure.liters = liters;
    unitOfMeasure.milliliters = milliliters;
    unitOfMeasure.pint = pint;
    unitOfMeasure.quart = quart;
    unitOfMeasure.cup = cup;
    unitOfMeasure.fluidOz = fluidOz;
    unitOfMeasure.tablespoon = tablespoon;
    unitOfMeasure.teaspoon = teaspoon;

    const updateUnitOfMeasure = await unitOfMeasure.save();
    res.json(updateUnitOfMeasure);
  } else {
    res.status(404);
    throw new Error('Unit of Measure not found');
  }
});

// @desc    Delete a UnitOfMeasure
// @route   DELETE /api/UnitOfMeasures/:id
// @access  Private/Admin
const deleteUnitOfMeasure = asyncHandler(async (req, res) => {
  const unitOfMeasure = await UnitOfMeasure.findById(req.params.id);

  if (unitOfMeasure) {
    await unitOfMeasure.remove();
    res.json({ message: 'Unit Of Measure removed.' });
  } else {
    res.status(404);
    throw new Error('Unit Of Measure not found');
  }
});

export {
  getUnitOfMeasure,
  getOneUnitOfMeasure,
  findByNameUnitOfMeasure,
  createUnitOfMeasure,
  updateUnitOfMeasure,
  deleteUnitOfMeasure,
};
