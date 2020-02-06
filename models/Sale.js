const mongoose = require("mongoose");
var moment = require("moment");

const SaleSchema = mongoose.Schema({
  Sale_id: {
    type: String,
    required: true
  },
  item_id: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  quantity: {
    type: Number,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    required: true,
    default: Date.now
  },
  sale_date: {
    type: String,
    required: true,
    default: moment().format("MMMM Do YYYY, h:mm:ss a")
  }
});

module.exports = mongoose.model("Sale", SaleSchema);
