const express = require("express");
const {
  isSellerAuthenticated,
  isAuthenticated,
} = require("../middleware/auth");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const { upload } = require("../multer");
const Shop = require("../models/Shop");
const ErrorHandler = require("../utilities/ErrorHandler");
const Product = require("../models/Product");
const router = express.Router();

// create product route
router.post(
  "/create",
  isSellerAuthenticated,
  upload.array("images"),
  catchAsyncErrors(async (req, res, next) => {
    const shopId = req.body.shopId;
    const shop = await Shop.findById(shopId);
    if (!shop) return next(new ErrorHandler("Shop not found!", 404));
    const files = req.files;
    const imagesUrl = files?.map((e) => e.filename);
    console.log(imagesUrl);
    const productData = req.body;
    productData.images = imagesUrl;
    productData.shop = shop;
    console.log(productData);
    const product = await Product.create(productData);
    res.status(200).json({ success: true, product: product });
  })
);

// get All products
router.get(
  "/seller/getAll",
  isSellerAuthenticated,
  catchAsyncErrors(async (req, res, next) => {
    try {
      const id = req.body.decodeToken.id;
      const allProduct = await Product.find({ shopId: id });
      res.status(200).json(allProduct);
    } catch (error) {
      next(new ErrorHandler("Internal Server Error", 500));
    }
  })
);

// delete Product route
router.post(
  "/delete/:id",
  isSellerAuthenticated,
  catchAsyncErrors(async (req, res, next) => {
    try {
      const product = await Product.findByIdAndDelete(req.params.id);
      console.log(product);
      if (!product) return next(new ErrorHandler("Product not exist", 404));
      res
        .status(200)
        .json({ success: true, message: "Product Deleted Succesfully" });
    } catch (error) {
      next(new ErrorHandler(error, 500));
    }
  })
);

// get A single Product

router.get(
  "/get/:id",
  isAuthenticated,
  catchAsyncErrors(async (req, res, next) => {
    try {
      const id = req.params.id;
      const product = await Product.findById(id);
      if (!product) return next(new ErrorHandler(`Product doesn't exist`));
      res.status(200).json({ product });
    } catch (error) {
      next(new ErrorHandler(error, 500));
    }
  })
);

module.exports = router;
