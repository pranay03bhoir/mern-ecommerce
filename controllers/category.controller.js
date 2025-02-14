const Category = require("../models/category");

const addCategory = async (req, res) => {
  try {
    const category = Category(req.body);
    await category.save();
    res.status(200).json({
      success: true,
      data: category,
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({
      success: false,
      message: "Something went wrong!",
    });
  }
};
const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;
    const category = await Category.findByIdAndUpdate(id, {
      name: name,
      description: description,
    });
    if (!category) {
      return res.status(404).json({
        success: false,
        message: "Category not found",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Category updated successfully",
        data: category,
      });
    }
  } catch (e) {
    console.error(e);
    res.status(500).json({
      success: false,
      message: "Something went wrong!!",
    });
  }
};
const getCategories = async (req, res) => {
  try {
    const categories = await Category.find({});
    if (!categories) {
      return res.status(404).json({
        success: false,
        message: "Categories not found",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Categories found",
        data: categories,
      });
    }
  } catch (e) {
    console.error(e);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};
const getCategoryByName = async (req, res) => {
  try {
    const { name } = req.query;
    const category = await Category.findOne({
      name: {
        $regex: name,
        $options: "i",
      },
    });
    if (!category) {
      return res.status(404).json({
        success: false,
        message: "Category not found",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Category found",
        date: category,
      });
    }
  } catch (e) {
    console.error(e);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};
const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category.findByIdAndDelete(id);
    if (!category) {
      return res.status(404).json({
        success: false,
        message: "Category does not exists.",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: `${category.name} deleted successfully`,
      });
    }
  } catch (e) {
    console.error(e);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};
module.exports = {
  addCategory,
  updateCategory,
  getCategories,
  getCategoryByName,
};
