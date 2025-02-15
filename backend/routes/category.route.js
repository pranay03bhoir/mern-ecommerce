const express = require("express");
const {
  addCategory,
  updateCategory,
  getCategories,
  getCategoryByName,
} = require("../controllers/category.controller");
const router = express.Router();

router.post("/add/category", addCategory);
router.put("/update/category/:id", updateCategory);
router.get("/get/categories", getCategories);
router.get("/get/category", getCategoryByName);
module.exports = router;
