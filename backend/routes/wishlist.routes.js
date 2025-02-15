const express = require("express");
const { addWishlist } = require("../controllers/wishlist.controller");
const authMiddleware = require("../middleware/authorization.middleware");
const router = express.Router();

router.post("/wishlist/:id", authMiddleware, addWishlist);

module.exports = router;
