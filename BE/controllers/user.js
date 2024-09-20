const db = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = db.user;

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.hash_password);

    if (!user || !isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // GENERATE JWT TOKEN
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET_KEY);
    return res.status(201).json({ user, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

const register = async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      email,
      phone_number,
      password,
      profile_image,
    } = req.body;

    // REQUIRED PARAMSETERS
    const requiredParams = [
      first_name,
      last_name,
      email,
      phone_number,
      password,
    ];

    if (requiredParams.some((parma) => !parma)) {
      return res.status(400).json({ message: "Some parameters are missing!" });
    }

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      first_name,
      last_name,
      email,
      phone_number,
      password,
      hash_password: hashedPassword,
      profile_image: profile_image || null,
    });

    if (user) {
      // GENERATE JWT TOKEN
      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET_KEY);
      res.status(201).json({
        user,
        token,
        message: "User registered successfully",
      });
    } else {
      res.status(400).json({ message: "User not registered" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error, message: "Something went wrong" });
    return;
  }
};

module.exports = {
  login,
  register,
};
