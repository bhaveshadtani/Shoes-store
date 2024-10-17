const router = require("express").Router();
const { applyCoupon } = require("../controllers/coupon");
const verify = require("../middleware/verify");

router.route("/apply").post(verify, applyCoupon);
module.exports = router;
