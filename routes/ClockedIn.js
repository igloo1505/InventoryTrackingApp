const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const auth = require("../middleware/auth");
const config = require("config");
const { check, validationResult } = require("express-validator");

const ClockedIn = require("../models/ClockedIn");

router.post("/", async (req, res) => {
  const { _id } = req.body;
  console.log(_id);
  try {
    let clockedIn = new ClockedIn({ _id });

    const addClockedIn = await clockedIn.save();
    console.log(addClockedIn);
    res.json(addClockedIn);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Failed to post as clocked in");
  }
});
router.get("/", async (req, res) => {
  try {
    const clocked = await ClockedIn.find();
    res.json(clocked);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("failed to get clocked in");
  }
});

// DELETE /clockedIn
// !! Private
router.delete("/:id", auth, async (req, res) => {
  try {
    let clockOut = await ClockedIn.findById(req.params.id);
    await ClockedIn.findByIdAndRemove(req.params.id);
    res.json({ msg: `${id} removed from currently In` });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Error on clock-out backend");
  }
});

module.exports = router;
