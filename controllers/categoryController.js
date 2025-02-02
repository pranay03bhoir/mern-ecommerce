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
module.exports = { addCategory };
