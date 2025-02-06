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
const updateProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const { name, description, brand, price, stock, category } = req.body;
    const product = await Products.findByIdAndUpdate(
      productId,
      {
        name,
        description,
        brand,
        price,
        stock,
        category,
      },
      { new: true, lean: true },
    );
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found!!",
      });
    }
    res.status(200).json({
      success: true,
      message: `${name} details successfully updated.`,
      data: product,
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({
      success: false,
      message: "Some error occurred",
    });
  }
};
const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Products.findByIdAndDelete(productId, {
      lean: true,
    });
    if (!product) {
      res.status(404).json({
        success: false,
        message: "Product not found",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Product deleted successfully",
        data: product,
      });
    }
  } catch (e) {
    console.error(e);
    res.status(500).json({
      success: false,
      message: "Something went wrong.",
    });
  }
};
module.exports = {
  addProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
