const Image = require("../models/images");
const Products = require("../models/product");
const { uploadToCloudinary } = require("../helpers/cloudinary.upload");
const cloudinary = require("../config/cloudinary.config");
const fs = require("fs");

const imageUpload = async (req, res) => {
  try {
    if (!req.file) {
      res.status(400).json({
        success: false,
        message: "File is required,Please upload a file.",
      });
    } else {
      const productID = await Products.findById(req.params.id);
      console.log(productID);
      if (!productID) {
        res.status(404).json({
          success: false,
          message: "Product not found",
        });
      } else {
        const { url, publicId } = await uploadToCloudinary(req.file.path);
        const newlyUploadedImage = new Image({
          productId: productID._id,
          imageURL: url,
          publicId: publicId,
          uploadedBy: req.userInfo._id,
        });
        await newlyUploadedImage.save();
        await Products.findByIdAndUpdate(productID._id, {
          $push: {
            image: newlyUploadedImage,
          },
        });
        res.status(200).json({
          success: true,
          message: "Image uploaded",
          image: newlyUploadedImage,
        });
        fs.unlink(req.file.path, (err) => {
          if (err) {
            console.error(err);
          }
        });
      }
    }
  } catch (e) {
    console.error(e);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};
const imageDelete = async (req, res) => {
  try {
    const image = await Image.findById(req.params.id);
    if (!image) {
      return res.status(404).json({
        success: false,
        message: "Image not found",
      });
    } else {
      await cloudinary.uploader.destroy(image.publicId);
      await Image.findByIdAndDelete(image._id);
      res.status(200).json({
        success: true,
        message: "Image deleted successfully",
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
module.exports = { imageUpload, imageDelete };
