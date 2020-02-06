const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const Sale = require("../models/Sale");

// POST /Sale
// Post Sale Data
// !! Private
router.post("/", async (req, res) => {
  const { item_id, Sale_id, description, quantity, amount } = req.body;
  try {
    const newSale = new Sale({
      item_id,
      Sale_id,
      description,
      quantity,
      amount
    });
    const addSale = await newSale.save();
    res.json(addSale);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("failed at sale POST");
  }
});

router.get("/", async (req, res) => {
  try {
    const sales = await Sale.find();
    res.json(sales);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("GET Sales data failed");
  }
});

module.exports = router;
