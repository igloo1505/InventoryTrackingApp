const mongoose = require("mongoose");

const ItemSchema = mongoose.Schema({
  description: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  category: {
    type: String
  },
  purchase_value: {
    type: Number
  },
  sale_price: {
    type: Number
  },
  reorder_at: {
    type: Number
  },
  received_date: {
    type: Date,
    default: new Date()
  }
});

module.exports = mongoose.model("Item", ItemSchema);
