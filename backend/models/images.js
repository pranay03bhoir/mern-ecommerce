const mongoose = require("mongoose");

const imageSchema = mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Products",
    },
    imageURL: [
      {
        type: String,
      },
    ],
    publicId: [
      {
        type: String,
      },
    ],
    uploadedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true },
);
module.exports = mongoose.model("Images", imageSchema);
