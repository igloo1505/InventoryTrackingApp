const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const User = require("../models/Users");

// POST /employees
// !! Public
router.post(
  "/",
  [
    check("email", "An email is required").isEmail(),
    check("password", "Password must be at least 8 characters").isLength({
      min: 8
    })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { firstName, lastName, email, password } = req.body;

    //!! 'User' here refers specifically to user model
    try {
      let user = await User.findOne({ email: email });
    } catch (error) {}
  }
);

module.exports = router;
