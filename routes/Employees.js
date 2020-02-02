const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const config = require("config");
const { check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const Employee = require("../models/Users");

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
    const { firstName, lastName, email, password, supervisor } = req.body;
    try {
      let employee = await Employee.findOne({ email: email });
      if (employee) {
        return res.status(400).json({ msg: "User already exists" });
      }
      employee = new Employee({
        firstName,
        lastName,
        email,
        password,
        supervisor
      });
      const salt = await bcrypt.genSalt(15);
      employee.password = await bcrypt.hash(password, salt);
      await employee.save();

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
          res.json({ token });
        }
      );
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Failed at POST employee");
    }
  }
);

// Router GET employees
// !! Private
router.get("/", async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("GET employees failed");
  }
});

module.exports = router;
