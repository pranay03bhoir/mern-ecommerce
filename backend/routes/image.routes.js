const express = require("express");
const { imageUpload, imageDelete } = require("../controllers/image.controller");
const uploadMiddleware = require("../middleware/uploadImage.middleware");
const router = express.Router();

router.post("/upload/:id", uploadMiddleware.single("image"), imageUpload);
router.delete("/delete/:id", imageDelete);
module.exports = router;
