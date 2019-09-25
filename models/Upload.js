const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
  date: {
    type: Date,
    default: Date.now()
  },
  title: {
    type: String,
    required: true
  },
  description: {
      type: String
  },
  file: {
    type: String
  }
});

module.exports = mongoose.model("recipe", RecipeSchema);
