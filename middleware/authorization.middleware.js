const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Not an authorized user, Access Denied",
    });
  } else {
    try {
      const verifiedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
      console.log(verifiedToken);
      req.userInfo = verifiedToken;
      next();
    } catch (e) {
      console.error(e);
      res.status(500).json({
        success: false,
        message: "Something went wrong",
      });
    }
  }
};
module.exports = authMiddleware;
