const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Create a user using POST "/api/auth/createuser" Doesn't require auth

router.post("/createuser", async (req, res) => {
  try {
    const user = User(req.body);
    const createUser = await user.save();
    res.status(201).send(req.body);
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
