const express = require("express");
const {
  signup,
  login,
  logout,
  myDetails,
} = require("../controllers/userAuthController");
const { verifyToken } = require("../middleware/verifyToken");

const userAuthRouter = express.Router();

userAuthRouter.post("/signup", signup);
userAuthRouter.post("/login", login);
userAuthRouter.post("/logout", logout);
userAuthRouter.get("/my-details", verifyToken, myDetails);

module.exports = userAuthRouter;
