const express = require("express");
const router = express.Router();
const Item = require("../models/Items");

// POST /inventory
// Add to inventory
// !! Private
router.post("/", async (req, res) => {
  const {
    description,
    quantity,
    location,
    purchase_price,
    sale_price,
    reorder_at,
    date
  } = req.body;
  try {
    const newItem = new Item({
      description,
      quantity,
      location,
      purchase_price,
      sale_price,
      reorder_at,
      date
    });
    const addItem = await newItem.save();
    res.json(addItem);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("failed at item POST");
  }
});

// GET /inventory
// !! PRIVATE

router.get("/", async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("GET items failed");
  }
});

// PUT /inventory
// !! Private
router.put("/:id", (req, res) => {
  res.send("update item, specifically quantity");
});

// DELETE /inventory
// !! Private
router.delete("/:id", (req, res) => {
  res.send("Delete from inventory");
});

module.exports = router;
