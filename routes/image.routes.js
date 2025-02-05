const express = require("express");
const { imageUpload } = require("../controllers/image.controller");
const uploadMiddleware = require("../middleware/uploadImage.middleware");
const router = express.Router();

router.post("/upload/:id", uploadMiddleware.single("image"), imageUpload);

module.exports = router;
