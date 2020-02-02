const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const config = require("config");
const { check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const Employee = require("../models/Users");
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
