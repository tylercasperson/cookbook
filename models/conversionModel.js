import mongoose from 'mongoose';

const conversionSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    abbreviation: { type: String },
    convertTo: { type: String },
    convertMeasurement: {
      type: Number,
    },
  },
  { timestamps: true }
);

const Conversion = mongoose.model('Conversion', conversionSchema);

export default Conversion;
