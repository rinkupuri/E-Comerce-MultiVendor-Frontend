const ErrorHandler = require("../utilities/ErrorHandler");
module.exports = (err, req, res, next) => {
  err.message = err.message || "Internal Server Error";
  err.statusCode = err.statusCode || 500;

  // wrong Mongo Db id error

  if (err.name === "CastError") {
    const message = `Resorces Not Found with this id... ${err.path} `;
    err = new ErrorHandler(message, 400);
  }

  //   Duplicate Key
  if (err.code === 11000) {
    const message = `Duplicate Key ${Object.keys(err.keyValues)} Entered`;
    err = new ErrorHandler(message, 400);
  }

  //   wrong jwt Error

  if (err.name === "JwtWebTockenError") {
    message = `Your Url is Invalid Please try Again Later`;
    err = new ErrorHandler(message, 401);
  }

  // Token Expire Error

  if (err.name === "TokenExpireError") {
    const message = `Your Url is expire Please try again later`;
    err = new ErrorHandler(message, 401);
  }

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};
