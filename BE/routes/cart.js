const router = require("express").Router();
const { addCart, viewCart, removeCart } = require("../controllers/cart");
const verify = require("../middleware/verify");

router.route("/add-cart").post(verify, addCart);
router.route("/view-cart").post(verify, viewCart);
router.route("/remove-cart").post(verify, removeCart);
module.exports = router;
