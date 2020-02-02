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
    category,
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
      category,
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
router.put("/:id", async (req, res) => {
  const {
    id,
    quantity,
    description,
    purchase_price,
    sale_price,
    reorder_at,
    location,
    scannable
  } = req.body;
  const fields = {};
  if (quantity) fields.quantity = quantity;
  if (description) fields.description = description;
  if (purchase_price) fields.purchase_price = purchase_price;
  if (sale_price) fields.sale_price = sale_price;
  if (reorder_at) fields.reorder_at = reorder_at;
  if (location) fields.location = location;
  if (scannable) fields.scannable = scannable;

  // !!! Check for admin credentials here for routes that need
  // Make sure user owns contact
  // if (contact.user.toString() !== req.user.id) {
  //   return res.status(401).json({ msg: 'Not authorized' });
  // }

  try {
    item = await Item.findByIdAndUpdate(
      req.params.id,
      { $set: fields },
      { new: true }
    );
    res.json(item);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Error at PUT item request");
  }
});

// DELETE /inventory
// !! Private
router.delete("/:id", (req, res) => {
  res.send("Delete from inventory");
});

module.exports = router;
