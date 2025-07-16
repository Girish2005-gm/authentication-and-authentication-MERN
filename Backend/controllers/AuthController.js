const { userModel } = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const connection = require("../models/db");

dotenv.config({ path: ".env" });


// Signup Controller
const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "User already exists, please login",
        success: false
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save new user
    const newUser = new userModel({
      name,
      email,
      password: hashedPassword
    });

    await newUser.save();

    res.status(201).json({
      message: "Signup successful",
      success: true
    });

  } catch (error) {
    console.error("Signup error:", error.message);
    res.status(500).json({
      message: "Internal server error",
      success: false
    });
  }
};

// Signin Controller
const signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const errorMsg = "Auth failed: Email or password is incorrect";

    // Check if user exists
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(403).json({ message: errorMsg, success: false });
    }

    // Validate password
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(403).json({ message: errorMsg, success: false });
    }

    // Generate JWT
    const token = jwt.sign(
      {
        _id: user._id,
        email: user.email
      },
      process.env.JWTSEC,
      { expiresIn: "24h" }
    );

    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        name: user.name,
        email: user.email,
        _id: user._id
      },
      success: true
    });

  } catch (error) {
    console.error("Login error:", error.message);
    res.status(500).json({
      message: "Internal server error",
      success: false
    });
  }
};

module.exports = {
  signup,
  signin
};
