const db = require("../models");
const User = db.user;

const applyCoupon = async (req, res) => {
  try {
    const { user_id, total_amount, couponCode } = req.body;
    return res.status(200).json({
      status: true,
      message: "Coupon applied successfully!",
      user_id,
      total_amount,
      couponCode,
    });
  } catch (error) {
    console.log(error, "error");
    return res.status(500).json({
      status: false,
      message: "Something went wrong",
    });
  }
};

module.exports = {
  applyCoupon,
};
