const { User } = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
exports.signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).send({ message: "All Field are required" });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send({ message: "User Already Exist" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });
    user.save();
    return res.status(201).send({ message: "Sign up ready", user });
  } catch (error) {
    return res.status(500).send({ message: "Error in Signup", error });
  }
};
exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(400).send({ message: "All Field are required" });
    }
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(400).send({ message: "Email Not Found" });
    }
    const passwordMathced = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!passwordMathced) {
      return res.status(400).send({ message: "Wrong Password" });
    }
    const token = jwt.sign(
      {
        _id: existingUser._id,
        email: existingUser.email,
      },
      process.env.JWT_SECRET
    );
    res.cookie("token", token, {
      path: "/",
      expires: new Date(Date.now() + 1000 * 24 * 60 * 60),
      httpOnly: true,
      sameSite: "lax",
    });
    return res.status(200).send({ data: existingUser, token });
  } catch (error) {
    return res.status(500).send({ message: "Error in Login", error });
  }
};

exports.logout = async (req, res) => {
  try {
    res.clearCookie("token");
    return res.status(200).send({ message: "Logout Successfully" });
  } catch (error) {
    return res.status(500).send({ message: "Error in Logout", error });
  }
};
