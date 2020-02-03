const mongoose = require("mongoose");
const moment = require("moment");

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
    type: String,
    default: moment().format("MMMM Do YYYY, h:mm:ss a")
  }
});

module.exports = mongoose.model("Item", ItemSchema);
