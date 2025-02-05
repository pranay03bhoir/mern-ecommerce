const Products = require("../models/product");
const { model } = require("mongoose");

const addProduct = async (req, res) => {
  try {
    const product = Products(req.body);
    await product.save();
    res.status(200).json({
      success: true,
      message: "Product added successfully",
      data: product,
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({
      success: false,
      message: "Something went wrong!",
    });
  }
};
const getProducts = async (req, res) => {
  try {
    const product = await Products.find({})
      .populate("category")
      .populate("image");
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product does not exists",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Product found",
        data: product,
      });
    }
  } catch (e) {
    console.error(e);
    res.status(500).json({
      success: false,
      message: "Something went wrong!",
    });
  }
};
const getProductById = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Products.findById(productId);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Product found.",
        data: product,
      });
    }
  } catch (e) {
    console.error(e);
    res.status(500).json({
      success: false,
      message: "Some error occurred",
    });
  }
};
module.exports = { addProduct, getProducts, getProductById };
