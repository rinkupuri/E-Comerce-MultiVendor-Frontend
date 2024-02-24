const { upload } = require("../multer");
const Shop = require("../models/Shop");
const router = require("express").Router();
const fs = require("fs");
const sendMail = require("../utilities/sendmail");
const jwt = require("jsonwebtoken");
const ErrorHandler = require("../utilities/ErrorHandler");
const sendToken = require("../utilities/jwtToken");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const bcrypt = require("bcrypt");
const { isSellerAuthenticated } = require("../middleware/auth");

// Create Store Route
router.post("/create-shop", upload.single("file"), async (req, res, next) => {
  const {
    email,
    name,
    password,
    phone,
    address,
    address2,
    city,
    country,
    zipcode,
  } = req.body;

  const user = await Shop.findOne({ email });
  const fileUrl = `uploads/${req.file.filename}`;
  if (user) {
    fs.unlink(fileUrl, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("File Delted Success");
      }
    });
    next(new ErrorHandler("User Already Exist", 401));
  }

  const newUser = {
    email: email,
    name: name,
    password: password,
    phoneNumber: phone,
    addresses: [
      {
        address1: address,
        address2: address2,
        city: city,
        country: country,
        zipcode: zipcode,
      },
    ],
    avatar: {
      url: req.file.filename,
    },
  };
  const activationToken = await jwt.sign(newUser, process.env.JWT_SECRET_KEY, {
    expiresIn: "5m",
  });
  const activationUrl = `http://localhost:3000/seller/activation/${activationToken}`;
  try {
    await sendMail({
      email: email,
      subject: "verify Account to Continue",
      message: `Hello Dear User,
          
          Please verify Your account to continue over Service. Click here to activate account ${activationUrl}
          `,
    });
    res
      .status(200)
      .json({ success: true, message: "Email Sent please verify email" });
  } catch (error) {
    next(new ErrorHandler(error, 500));
  }
});

// seller Login Route

router.post(
  "/login",
  catchAsyncErrors(async (req, res, next) => {
    const { email, password } = req.body;
    const user = await Shop.findOne({
      $or: [{ name: email }, { email: email }],
    }).select("+password");
    if (!user) return next(new ErrorHandler("User not Found!", 404));
    const verifyPassword = await bcrypt.compare(password, user.password);
    if (!verifyPassword)
      return next(new ErrorHandler("invalid Credential", 402));
    sendToken(user, 200, res, "seller");
  })
);

// Load Seller Route

router.get(
  "/get",
  isSellerAuthenticated,
  catchAsyncErrors(async (req, res, next) => {
    const seller = req.body;
    res.status(200).json({ seller });
  })
);

// activation checker Route

router.post("/activation", async (req, res, next) => {
  try {
    const { token } = req.body;
    const verifyTocken = await jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (!verifyTocken)
      return next(new ErrorHandler("Invalid Credentials", 401));
    const { email } = verifyTocken;
    const checkUser = await Shop.findOne({ email });
    console.log(checkUser);
    if (checkUser) return next(new ErrorHandler("User Already Created", 200));
    await Shop.create(verifyTocken);
    sendToken(verifyTocken, 201, res);
  } catch (error) {
    next(new ErrorHandler(error, 500));
  }
});

module.exports = router;
