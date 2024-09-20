const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const db = require("../models");

const verify = async (req, res, next) => {
  const secretKey = process.env.JWT_SECRET_KEY;
  const token = req.headers["authorization"]?.split(" ")[1];
  if (!token) {
    return res.status(403).json({ message: "Token is required" });
  }
  try {
    
  } catch (error) {
    console.error("JWT Verification Error:", error);
    return res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = verify;