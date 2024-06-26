const mongoose = require("mongoose");

const MONGO_URL = process.env.MONGODB_URL;
console.log('MONGO_URL:', MONGO_URL)
const DB_NAME = process.env.DB_NAME;
console.log('DB_NAME:', DB_NAME)

const db_connection = async () => {
  await mongoose
    .connect(MONGO_URL, { dbName: DB_NAME })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log(`Error: ${err}`);
      process.exit(1);
    });
};

module.exports= db_connection;
