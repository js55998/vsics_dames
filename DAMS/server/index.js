const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");

const connect = require("./databases/mongo.connect");
const studentRouter=require('./routes/student.route')
const app = express();
dotenv.config();
const PORT = process.env.PORT || 6000;
const HOST = "http://localhost:";

const corsOptions = {
  origin: ["http://localhost:6000", "http://localhost:3000"],
  methods: ["GET", "POST", "PUT", "DELETE"],
};
app.use(cors(corsOptions));

app.get("/", async (req, res) => {
  res.send("API is running...");
});

app.use('/api/student',studentRouter);

//following route will only be used in case the error is encountered.
app.use((req, res, next) => {
  const error = new Error(`Not found -${req.originalUrl}`)
  res.status(404)
  next(error)
})

//FOLLOWING IS THE FALL BACK ROUTE for url not listed in the backend folder
// app.use((err, req, res, next) => {
//   const statusCode = res.statusCode === 200 ? 500 : res.statusCode
//   res.status(statusCode)
//   res.json({
//     message: err.message,
//     stack: process.env.NODE_ENV === 'prod' ? null : err.stack,
//   })
// })










connect();
app.listen(PORT, 
    
    console.log(`Server running on port ${HOST}${PORT}`));
