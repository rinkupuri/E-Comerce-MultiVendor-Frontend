const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const sellerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your name!"],
    },
    email: {
      type: String,
      required: [true, "Please enter your email!"],
    },
    password: {
      type: String,
      required: [true, "Please enter your password"],
      minLength: [4, "Password should be greater than 4 characters"],
      select: false,
    },
    phoneNumber: {
      type: Number,
      required: true,
    },
    addresses: [
      {
        country: {
          type: String,
        },
        city: {
          type: String,
        },
        address1: {
          type: String,
        },
        address2: {
          type: String,
        },
        zipCode: {
          type: Number,
        },
        addressType: {
          type: String,
        },
      },
    ],
    role: {
      type: String,
      default: "user",
    },
    avatar: {
      public_id: {
        type: String,
      },
      url: {
        type: String,
        required: true,
      },
    },

    resetPasswordToken: String,
    resetPasswordTime: Date,
  },
  { timestamps: true }
);

//  Hash password
sellerSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  this.password = await bcrypt.hash(this.password, 10);
});

// jwt token
sellerSchema.methods.getJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES,
  });
};

// compare password
sellerSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model("Seller", sellerSchema);
