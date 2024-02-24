const jwt = require("jsonwebtoken");
const User = require("../models/User");

const sendToken = (user, statusCode, res, type) => {
  const newUser = new User(user);
  const token = newUser.getJwtToken();
  const options = {
    expire: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
    httpOnly: true,
  };

  if (type === "seller") {
    res.status(statusCode).cookie("seller_token", token, options).json({
      success: true,
      user,
      token,
    });
  } else {
    res.status(statusCode).cookie("token", token, options).json({
      success: true,
      user,
      token,
    });
  }
};
module.exports = sendToken;
