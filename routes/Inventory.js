const express = require("express");
const router = express.Router();

// GET /inventory
// !! PRIVATE
router.get("/", (req, res) => {
  res.send("get all inventory");
});

// POST /inventory
// Add to inventory
// !! Private
router.post("/", (req, res) => {
  res.send("register user");
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
