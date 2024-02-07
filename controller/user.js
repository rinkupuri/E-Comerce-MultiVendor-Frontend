const express = require("express");
const path = require("path");
const router = express.Router();
const { upload } = require("../multer");
const User = require("../models/User");
const ErroHandler = require("../utilities/ErrorHandler");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const bcrypt = require("bcrypt");
const sendMail = require("../utilities/sendmail");
const ErrorHandler = require("../utilities/ErrorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const sendToken = require("../utilities/jwtToken");
const { isAuthenticated } = require("../middleware/auth");

// Create User Route

router.post("/create-user", upload.single("file"), async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const userEmail = await User.findOne({ email: email });
    if (userEmail) {
      const fileName = req.file.filename;
      const fileUrl = `uploads/${fileName}`;
      fs.unlink(fileUrl, (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("file Deleted Successful");
        }
      });
      return next(new ErroHandler("User Already Exist", 401));
    }

    const fileName = req.file.filename;
    const fileUrl = path.join(fileName);

    const user = {
      name: name,
      email: email,
      password: password,
      avatar: {
        url: fileUrl,
      },
    };
    const activationTocken = createActivationTocken(user);

    const activationUrl = `http://localhost:3000/activation/${activationTocken}`;
    try {
      await sendMail({
        email: user.email,
        subject: "Acitvate your account",
        message: `Hello ${user.name} please click this link to activate your accountto continue, Link : ${activationUrl} `,
      });

      res.status(200).json({
        success: true,
        message: "Check your mail to verify your mail",
      });
    } catch (error) {
      next(new ErrorHandler("Internal Server Error " + error, 500));
    }

    // res.cookie("token", activationTocken, { httpOnly: true });
    // const newUser = await User.create(user);
    // const {
    //   email: emailid,
    //   name: userName,
    //   password: userPassword,
    //   ...rest
    // } = newUser._doc;
    // res.status(200).json({
    //   message: "User Created Successfull",
    //   user: { email: emailid, name: userName },
    // });
  } catch (error) {
    next(new ErroHandler("Internal Server Error" + error, 500));
  }
});

// login Route

router.post("/login", async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  if (!email || !password) {
    return next(new ErroHandler("All Fields are Required", 401));
  }
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return next(new ErroHandler("User Doen't Exist" + user, 404));
  }
  const comparePassword = await bcrypt.compare(password, user.password);
  if (!comparePassword) {
    return next(new ErroHandler("Invalid Credentals", 401));
  }
  sendToken(user, 201, res);
});

// activating Acount

router.post(
  "/activation",
  catchAsyncErrors(async (req, res, next) => {
    try {
      const { activationTocken } = req.body;

      const newUser = jwt.verify(activationTocken, process.env.JWT_SECRET_KEY);
      if (!newUser) {
        return next(new ErroHandler("Invalid Tocken", 400));
      }
      const checkUser = await User.findOne({ email: newUser.email });
      if (checkUser)
        return res
          .status(201)
          .json({ success: false, message: "User Created Successfuly" });
      const { email, name, password, avatar } = newUser;
      await User.create({
        name,
        email,
        password,
        avatar,
      });
      sendToken(newUser, 201, res);
    } catch (error) {
      next(new ErroHandler(error, 500));
    }
  })
);

// creating Activation Tocken For Auth
const createActivationTocken = (user) => {
  return jwt.sign(user, process.env.JWT_SECRET_KEY, {
    expiresIn: "5m",
  });
};

// get a user

router.get("/getuser", isAuthenticated, async (req, res) => {
  const user = req.body;
  res.status(200).json({ user });
});

module.exports = router;
