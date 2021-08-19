const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UploadSchema = new Schema({
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

module.exports = mongoose.model("upload", UploadSchema);
