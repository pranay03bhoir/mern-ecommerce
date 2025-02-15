const multer = require("multer");
const path = require("path");
const fs = require("fs");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname),
    );
  },
});

const checkFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new Error("File type is not an image, Please upload an image"));
  }
};

module.exports = multer({
  storage: storage,
  fileFilter: checkFilter,
  limit: {
    fileSize: 5 * 1024 * 1024,
  },
});
