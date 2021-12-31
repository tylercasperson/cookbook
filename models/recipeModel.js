import mongoose from 'mongoose';

const recipeSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: { type: String },
    ingredients: [
      {
        ingredient: { type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient' },
        unitOfMeasure: { type: String },
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
