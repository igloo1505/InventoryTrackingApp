const express = require("express");
const router = express.Router();

// GET /location
// !! PRIVATE
router.get("/", (req, res) => {
  res.send("get all location");
});

// POST /location
// Add to location
// !! Private
router.post("/", (req, res) => {
  res.send("register user");
});

// PUT /location
// !! Private
router.put("/:id", (req, res) => {
  res.send("update item, specifically quantity");
});

// DELETE /location
// !! Private
router.delete("/:id", (req, res) => {
  res.send("Delete from location");
});

module.exports = router;
