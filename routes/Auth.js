const express = require("express");
const router = express.Router();

// GET /auth
// !! Private
router.get("/", (req, res) => {
  res.send("Get logged in user");
});

// POST /auth
// Get logged in user
// !! Public
router.post("/", (req, res) => {
  res.send("Authenticate User");
});

module.exports = router;
