const express = require("express");
const {
  addProduct,
  getProducts,
  getProductById,
} = require("../controllers/productController");
const router = express.Router();

router.post("/add/products", addProduct);
router.get("/products", getProducts);
router.get("/products/:id", getProductById);

module.exports = router;
