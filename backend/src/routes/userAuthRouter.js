const express = require("express");
const { signup, login, logout } = require("../controllers/userAuthController");

const userAuthRouter = express.Router();

userAuthRouter.post("/signup", signup);
userAuthRouter.post("/login", login);
userAuthRouter.post("/logout", logout);

module.exports = userAuthRouter;
