import mongoose from 'mongoose';

const ingredientSchema = mongoose.Schema(
  {
    ingredient: {
      type: String,
      required: true,
    },
    calories: {
      type: String,
    },
    fat: {
      type: Number,
    },
    sodium: {
      type: Number,
    },
    carbohydrates: {
      type: Number,
    },
  },
  { timestamps: true }
);

const Ingredient = mongoose.model('Ingredient', ingredientSchema);

export default Ingredient;
