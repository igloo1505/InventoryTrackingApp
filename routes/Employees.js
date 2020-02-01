const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

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
  // async (req, res) => {
  //   const errors = validationResult(req);
  //   if (!errors.isEmpty()) {
  //     return res.status(400).json({ errors: errors.array() });
  //   }
  async (req, res) => {
    const { firstName, lastName, email, password, supervisor } = req.body;
    try {
      let employee = await Employee.findOne({ email: email });
      if (employee) {
        return res.status(400).json({ msg: "User already exists" });
      }
      //!!   overly verbose but used to illustrate for future use
      // user is refering to variable initialized above, User is referring specifically to User model
      employee = new Employee({
        firstName,
        lastName,
        email,
        password,
        supervisor
      });
      const addEmployee = await employee.save();
      res.json(addEmployee);
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
