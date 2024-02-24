const mongoose = require("mongoose");
const EventSchema = new mongoose.Schema(
  {
    productId: {
      type: String,
      require: [true, "Product id is must"],
    },
    productName: {
      type: String,
      require: [true, "Product Name is Required"],
    },
    productImage: {
      type: String,
      require: [true, "Product image is required"],
    },
    eventStartDate: {
      type: Date,
      require: [true, "Event Start Date is requierd"],
    },
    eventEndDate: {
      type: Date,
      require: [true, "Event end date is required"],
    },
    productPrice: {
      type: Number,
      require: [true, "Price is required"],
    },
    productDiscountPrice: {
      type: Number,
      require: [true, "Please Provide us Discount Price"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Event", EventSchema);
