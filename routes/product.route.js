const express = require("express");
const {
  addProduct,
  getProducts,
  getProductById,
} = require("../controllers/product.controller");
const authMiddleware = require("../middleware/authorization.middleware");
const adminMiddleware = require("../middleware/admin.middleware");
const router = express.Router();

router.post("/add/products", authMiddleware, adminMiddleware, addProduct);
router.get("/products", getProducts);
router.get("/products/:id", getProductById);
router.put("/update/:id", authMiddleware, adminMiddleware, updateProduct);

module.exports = router;
