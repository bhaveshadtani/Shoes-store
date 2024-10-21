const router = require("express").Router();
const { placeOrder, viewOrder } = require("../controllers/order");
const verify = require("../middleware/verify");

router.route("/place-order").post(verify, placeOrder);
router.route("/view-order/:orderId").post(verify, viewOrder);
module.exports = router;
