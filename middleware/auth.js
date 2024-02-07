const User = require("../models/User");
const ErrorHandler = require("../utilities/ErrorHandler");
const catchAsyncErrors = require("./catchAsyncErrors");
const jwt = require("jsonwebtoken");

exports.isAuthenticated = catchAsyncErrors(async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) return next(new ErrorHandler("Please Login first", 401));
  const decodeToken = await jwt.verify(token, process.env.JWT_SECRET_KEY);
  const user = await User.findById(decodeToken.id);
  req.body = user;
  next();
});
