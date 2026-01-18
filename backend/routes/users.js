var express = require('express');
var router = express.Router();
const userController = require("../controllers/userController");
const auth = require("../middleware/auth");

router.post("/register", auth.verifyToken,auth.hasRole("admin"), userController.registerUser);
router.post("/login", userController.loginUser);
module.exports = router;
