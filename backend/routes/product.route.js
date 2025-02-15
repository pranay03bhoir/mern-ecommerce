const express = require("express");
const {
  addProduct,
  getProducts,
  getProductById,
  getProductByName,
  getProductsByBrand,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller");
const authMiddleware = require("../middleware/authorization.middleware");
const adminMiddleware = require("../middleware/admin.middleware");
const router = express.Router();

router.post("/add/products", authMiddleware, adminMiddleware, addProduct);
router.get("/products", getProducts);
router.get("/products/:id", getProductById);
router.get("/product/name", authMiddleware, getProductByName);
router.get("/product/brand", authMiddleware, getProductsByBrand);
router.put("/update/:id", authMiddleware, adminMiddleware, updateProduct);
router.delete("/delete/:id", authMiddleware, adminMiddleware, deleteProduct);

module.exports = router;
