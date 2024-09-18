const router = require("express").Router();
const { login } = require("../controllers/user.js");

router.route("/login").get(login);

module.exports = router;