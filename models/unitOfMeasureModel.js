import mongoose from 'mongoose';

const unitOfMeasureSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    abbreviation: { type: String },
    gallon: { type: Number },
    quart: { type: Number },
    pint: { type: Number },
    liters: { type: Number },
    milliliters: { type: Number },
    cup: { type: Number },
    fluidOz: { type: Number },
    tablespoon: { type: Number },
    teaspoon: { type: Number },
  },
  { timestamps: true }
);

const UnitOfMeasure = mongoose.model('UnitOfMeasure', unitOfMeasureSchema);

export default UnitOfMeasure;
