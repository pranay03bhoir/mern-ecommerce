const express = require("express");
const { registerUser, loginUser } = require("../controllers/user.controller");
const authMiddleware = require("../middleware/authorization.middleware");
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;
