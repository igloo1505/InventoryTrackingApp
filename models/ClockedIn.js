const mongoose = require("mongoose");

const ClockedInSchema = mongoose.Schema({
  _id: {
    type: String,
    required: true
  },
  FirstName: {
    type: String
  },
  lastName: {
    type: String
  }
});

module.exports = mongoose.model("ClockedIn", ClockedInSchema);
