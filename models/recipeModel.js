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
    toolsNeeded: [
      {
        tool: { type: String },
      },
    ],
    instructions: [
      {
        step: { type: Number },
        task: { type: String },
      },
    ],
  },
  { timestamps: true }
);

const Recipe = mongoose.model('Recipe', recipeSchema);

export default Recipe;
