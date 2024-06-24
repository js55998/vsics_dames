const mongoose = require('mongoose');
//you guys use mongodb://127.0.0.1:27017/
const MONGODB_URL=`mongodb://0.0.0.0:27017/`
const dbConnection = () => {
    mongoose
    .connect(MONGODB_URL, {dbName: "book_store",})
    .then(() => {console.log("Connected to database!");})
    .catch((err) => {console.log(`Some error occurred while connecting to database: ${err}`);});
};
module.exports=dbConnection;