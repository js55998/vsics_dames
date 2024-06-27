const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");

const connection=require("./database/mongo.connection")

const app = express();
dotenv.config();

const PORT = process.env.PORT || 6000;
const HOST = "http://localhost:";



app.use(express.json());

const corsOptions = {
  origin: ["http://localhost:6000", "http://localhost:3000"],
  methods: ["GET", "POST", "PUT", "DELETE"],
};

app.use(cors(corsOptions));

app.get("/", async (req, res) => {
  res.send("API is running...");
});

connection();

app.listen(PORT, console.log(`Server running on port ${HOST}${PORT}`));
