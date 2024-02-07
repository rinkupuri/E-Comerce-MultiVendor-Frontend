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
    origin: "https://multivendor-e-com.vercel.app",
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
app.use("/api/v2/user", user);

// Error Handeling
app.use(ErrorHandler);

// Connecting to DB
app.get("/", (req, res) => {
  res.send("Hello srever is Started");
});

module.exports = app;
