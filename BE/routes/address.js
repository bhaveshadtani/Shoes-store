const router = require("express").Router();
const {
  addEditAddress,
  removeAddress,
  getAddresses,
} = require("../controllers/address");
const verify = require("../middleware/verify");

router.route("/add-edit-address").post(verify, addEditAddress);
router.route("/get-addresses").get(verify, getAddresses);
router.route("/remove-address/:address_id").delete(verify, removeAddress);
module.exports = router;
