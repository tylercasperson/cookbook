import mongoose from 'mongoose';

const recipeSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: { type: String },
    category: { type: String },
    ingredients: [
      {
        ingredient: { type: String },
        quantity: { type: Number },
        unitOfMeasure: { type: mongoose.Schema.Types.ObjectId, ref: 'UnitOfMeasure' },
      },
    ],
    toolsNeeded: { type: Array },
    instructions: [
      {
        title: { type: String },
        group: { type: Array },
      },
    ],
  },
  { timestamps: true }
);

const Recipe = mongoose.model('Recipe', recipeSchema);

export default Recipe;
