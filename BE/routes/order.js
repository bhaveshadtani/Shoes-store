const router = require("express").Router();
const { placeOrder } = require("../controllers/order");
const verify = require("../middleware/verify");

router.route("/place-order").post(verify, placeOrder);
module.exports = router;
