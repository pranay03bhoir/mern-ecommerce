const mongoose = require("mongoose");

const wishListSchema = mongoose.Schema({
  productId: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Products",
    },
  ],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Wishlist", wishListSchema);
