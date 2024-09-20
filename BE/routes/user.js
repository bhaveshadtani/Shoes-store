const router = require("express").Router();
const { login, register } = require("../controllers/user.js");
const verify = require("../middleware/verify.js");

router.route("/login").post(login);
router.route("/register").post(register);

// router.route("/forgot-password").post(forgot-password);
// router.route("/reset-password").post(reset-password);
// router.route("/logout").post(logout);

module.exports = router;
