const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const db = require("../models");

const verify = async (req, res, next) => {
  const secretKey = process.env.JWT_SECRET_KEY;
  let token = req?.headers["authorization"]?.split(" ")[1] || null;
  try {
    if (!token) {
      return res.status(401).json({ message: "Token is required" });
    }
    const decoded = token
      ? await promisify(jwt.verify)(token, secretKey)
      : null;

    const user = await db.user.findByPk(decoded?.userId);
    if (!user) {
      throw new Error("User not found");
    }
    req.user = {
      loggedUserId: decoded?.userId || null,
      loggedUserDetails: user?.toJSON() || {},
    };
    next();
  } catch (error) {
    console.error("JWT Verification Error:", error);
    return res.status(400).json({ message: error.message });
  }
};

module.exports = verify;
