const mongoose = require("mongoose");

const connectDB = async () => {
  //   console.log(process.env.DB_URL);

  //connecting to mongoo DB
  const data = await mongoose.connect(process.env.DB_URL);
  console.log(`Db Connected to Server : ${data.connection.host}`);
};

module.exports = connectDB;
