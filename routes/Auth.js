const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const auth = require("../middleware/auth");
const config = require("config");
const { check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const Employee = require("../models/Users");

// GET /auth
// !! Private
router.get("/", auth, async (req, res) => {
  try {
    const employee = await Employee.findById(req.employee.id).isSelected(
      "-password"
    );
    res.json(employee);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: "not authorized" });
  }
});

// POST /auth
// !! Public
router.post(
  "/",
  [
    check("email", "Please include a valid email").isEmail(),
    check("password", "Password is required").exists()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
      let employee = await Employee.findOne({ email });
      if (!employee) {
        return res.status(400).json({ msg: "invalid user credentials" });
      }
      const match = await bcrypt.compare(password, employee.password);
      if (!match) {
        return res.status(400).json({ msg: "invalid password" });
      }
      const payload = {
        employee: {
          id: employee.id
        }
      };
      jwt.sign(
        payload,
        config.get("jwtSecret"),
        {
          expiresIn: 28800
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token, employee });
        }
      );
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Error at authenticate user");
    }
  }
);

module.exports = router;
