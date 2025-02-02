const express = require("express");
const { addCategory } = require("../controllers/categoryController");
const router = express.Router();

router.post("/add/category", addCategory);

module.exports = router;
