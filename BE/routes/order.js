const router = require("express").Router();
const { placeOrder, addEditAddress } = require("../controllers/order");
const verify = require("../middleware/verify");

router.route("/place-order").post(verify, placeOrder);
router.route("/add-edit-address").post(verify, addEditAddress);
module.exports = router;
