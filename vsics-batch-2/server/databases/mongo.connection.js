const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const MONGO_URL = process.env.MONGODB_URL;
const DB_NAME = process.env.DB_NAME;
const mongo_connect = async () => {
  await mongoose
    .connect(MONGO_URL, { dbName:DB_NAME })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log(`Error: ${err}`);
      process.exit(1);
    });
};
module.exports = mongo_connect;
