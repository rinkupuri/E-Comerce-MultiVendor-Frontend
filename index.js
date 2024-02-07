const connectDB = require("./db/db");
const app = require("./server");

// listing to server

const server = app.listen(process.env.PORT || 8800, () => {
  console.log("Server is Listing on http://localhost:8800/");
});

//Handling uncaught Exception

process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting Down The Server");
  server.close(() => {
    process.exit(1);
  });
});

// initalising Config

if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "./config/.env" });
}

// Connecting to Db
connectDB();

// handeling promise rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting Down The Server");
  server.close(() => {
    process.exit(1);
  });
});
