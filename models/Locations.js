const mongoose = require("mongoose");

const LocationSchema = mongoose.Schema({
  description: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Location", LocationSchema);
