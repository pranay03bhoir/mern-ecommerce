const adminMiddleware = async (req, res, next) => {
  try {
    const userRole = req.userInfo.role;
    if (userRole !== "admin") {
      res.status(401).json({
        success: false,
        message: "Access Denied, Admin rights required.",
      });
    } else {
      next();
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};
module.exports = adminMiddleware;
