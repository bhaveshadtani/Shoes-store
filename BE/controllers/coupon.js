const db = require("../models");
const User = db.user;

const applyCoupon = async (req, res) => {
  try {
    const { user_id, total_amount, couponCode } = req.body;
    res.status(200).json({
      user_id,
      total_amount,
      couponCode,
      message: "Coupon applied successfully!",
    });
  } catch (error) {
    console.log(error, "error");
    res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = {
  applyCoupon,
};
