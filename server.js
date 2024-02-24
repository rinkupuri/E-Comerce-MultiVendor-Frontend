const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const ErrorHandler = require("./middleware/Error");
const cors = require("cors");

//
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use("/images/", express.static("uploads"));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

//Config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "./config/.env" });
}

// Importing Routes
const user = require("./controller/user");
const seller = require("./controller/seller");
const product = require("./controller/product");
const event = require("./controller/event.js");
app.use("/api/v2/user", user);
app.use("/api/v2/seller", seller);
app.use("/api/v2/product", product);
app.use("/api/v2/event", event);

// Error Handeling
app.use(ErrorHandler);

// Connecting to DB
app.get("/", (req, res) => {
  res.send("Hello srever is Started");
});

module.exports = app;
