const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  try {
    const { fullName, email, password, role } = req.body;
    const checkExistingUser = await User.findOne({
      email: req.body.email,
    });
    if (checkExistingUser) {
      return res.status(400).json({
        success: false,
        message: `User already exists with ${email}, Please try with different email`,
      });
    } else {
      const saltRounds = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      const user = new User({
        fullName,
        email,
        password: hashedPassword,
        role: role || "user",
      });
      await user.save();
      if (user) {
        res.status(201).json({
          success: true,
          message: `${fullName} Registered successfully`,
        });
      } else {
        res.status(400).json({
          success: false,
          message: "Error registering user",
        });
      }
    }
  } catch (e) {
    console.error(e);
    res.status(500).json({
      success: false,
      message: "Some error occurred",
    });
  }
};
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({
      email: email,
    });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: `${email} is not registered, Please register first then try logging in.`,
      });
    } else {
      const isPasswordMatch = bcrypt.compare(password, user.password);
      if (!isPasswordMatch) {
        return res.status(400).json({
          success: false,
          message: "Invalid credentials",
        });
      } else {
        const payLoad = {
          id: user._id,
          email: user.email,
          role: user.role,
        };
        const accessToken = jwt.sign(payLoad, process.env.JWT_SECRET_KEY, {
          expiresIn: "1h",
        });
        res.status(200).json({
          success: true,
          message: "Logged in successfully",
          accessToken,
        });
      }
    }
  } catch (e) {
    console.error(e);
    res.status(500).json({
      success: false,
      message: "Some error occurred",
    });
  }
};
const updateUserDetails = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    const user = await User.findByIdUpdate(req.params.id, {
      fullName,
      email,
      password,
    });
    if (user) {
      res.status(200).json({
        success: true,
        message: "User updated successfully",
      });
    } else {
      res.status(400).json({
        success: false,
        message: "Error updating user",
      });
    }
  } catch (error) {
    console.error(e);
    res.status(500).json({
      success: false,
      message: "Some error occurred",
    });
  }
};
module.exports = { registerUser, loginUser,updateUserDetails };
