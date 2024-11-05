const db = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const crypto = require("crypto");
const User = db.user;

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    const isMatch = user
      ? await bcrypt.compare(password, user?.hash_password)
      : false;

    if (!user || !isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    // GENERATE JWT TOKEN
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET_KEY);
    return res.status(200).json({
      success: true,
      message: "Login successful",
      data: { user, token },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

const register = async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      email,
      phone_number,
      password,
      profile_image,
      role,
    } = req.body;

    // REQUIRED PARAMSETERS
    const requiredParams = [
      first_name,
      last_name,
      email,
      phone_number,
      password,
    ];

    if (requiredParams.some((param) => !param)) {
      return res.status(400).json({ message: "Some parameters are missing!" });
    }

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Email already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      first_name,
      last_name,
      email,
      phone_number,
      password,
      hash_password: hashedPassword,
      profile_image: profile_image || null,
      role: role >= 0 && role <= 2 ? role : "2", // Ensure role is between 0 and 2
    });

    if (user) {
      // GENERATE JWT TOKEN
      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET_KEY);
      return res.status(200).json({
        success: true,
        message: "User registered successfully",
        data: { user, token },
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "User not registered",
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
      error,
    });
  }
};

const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Please enter registered email address",
      });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SENDER_MAIL,
        pass: process.env.SENDER_PASSWORD,
      },
    });
    const token = crypto.randomBytes(32).toString("hex");
    const resetLink = `${process.env.FRONTEND_URL}/reset-password?token=${token}`;
    const output = `
      <p>Dear ${user.full_name},</p>
      <p>You recently requested to reset your password for your account.</p>
      <p>To reset your password, please click on the link below within 24 hours:</p>
      <p><a href="${resetLink}">Reset Password</a></p>
      <p>If you did not request a password reset or the link has expired, please request a new password reset link.</p>
    `;

    const isMailSent = await transporter.sendMail({
      from: process.env.SENDER_MAIL,
      to: email,
      subject: "Reset password",
      html: output,
    });

    if (isMailSent?.accepted?.length > 0) {
      const setPasswordResetToken = await User.update(
        {
          password_reset_token: token,
          password_reset_expires: new Date(Date.now() + 3600000), // 01 hour
        },
        { where: { email } }
      );
      if (setPasswordResetToken) {
        return res.status(200).json({
          status: true,
          message: "Password reset link sent successfully",
        });
      }
    } else {
      console.error("Email sending failed:", info.rejected);
      return res.status(500).json({
        status: false,
        message: "Failed to send password reset email",
      });
    }
  } catch (error) {
    console.log(error, "error");
    return res.status(500).json({
      status: false,
      message: "Something went wrong",
    });
  }
};

const logout = async (req, res) => {
  try {
    res.clearCookie("token");
    return res.status(200).json({
      status: true,
      message: "Logged out successfully",
    });
  } catch (error) {
    console.log(error, "error");
    return res.status(500).json({
      status: false,
      message: "Something went wrong",
    });
  }
};

module.exports = {
  login,
  register,
  forgotPassword,
  logout,
};
