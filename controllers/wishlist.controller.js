const Wishlist = require("../models/wishlist");
const Product = require("../models/product");
const User = require("../models/user");
const addWishlist = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }
    let wishlist = await Wishlist.findOne({ user: req.userInfo.id });
    if (!wishlist) {
      wishlist = new Wishlist({
        productId: [product._id],
        user: req.userInfo.id,
      });
    } else {
      await Wishlist.findByIdAndUpdate(
        wishlist._id,
        {
          $addToSet: {
            productId: product._id,
          },
        },
        { new: true, useFindAndModify: false },
      );
    }
    await wishlist.save();

    await User.findByIdAndUpdate(req.userInfo.id, {
      $set: {
        wishList: wishlist._id,
      },
    });

    res.status(200).json({
      success: true,
      message: `${product.name} added to wishlist`,
      data: wishlist,
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};
module.exports = { addWishlist };
