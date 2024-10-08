const router = require("express").Router();
const { addCart, viewCart, removeCart } = require("../controllers/cart");

router.route("/add-cart").post(addCart);
router.route("/view-cart").post(viewCart);
router.route("/remove-cart").post(removeCart);
module.exports = router;
