const User = require("../models/user-model");
const bcrypt = require("bcryptjs");
// controller for home page
const home = async (req, res) => {
  try {
    res.status(200).send(`<h1>Welcome to Express.</h1>`);
  } catch (error) {
    console.log(error);
  }
};
// controller for register page
const register = async (req, res) => {
  try {
    console.log(req.body);
    const { username, email, phone, password } = req.body;
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(400).json({ message: "email already exists" });
    }

    // hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const userCreated = await User.create({
      username,
      email,
      phone,
      password: hashedPassword,
    });

    res.status(201).json({ message: userCreated });
  } catch (error) {
    res.status(500).json("internal server error");
  }
};

module.exports = { home, register };
