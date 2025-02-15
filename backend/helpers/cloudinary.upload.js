const cloudinary = require("../config/cloudinary.config");

const uploadToCloudinary = async (filePath) => {
  try {
    const result = await cloudinary.uploader.upload(filePath);
    return {
      url: result.secure_url,
      publicId: result.public_id,
    };
  } catch (e) {
    console.error(e);
    throw new Error("Error while uploading");
  }
};

module.exports = { uploadToCloudinary };
