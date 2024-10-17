const router = require("express").Router();
const { addEditAddress, removeAddress } = require("../controllers/address");
const verify = require("../middleware/verify");

router.route("/add-edit-address").post(verify, addEditAddress);
router.route("/remove-address/:address_id").delete(verify, removeAddress);
module.exports = router;
