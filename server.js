const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const userRoute = require("./routes/userRoute");

// middlewere

app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());

// connect DB

mongoose.connect(
  process.env.DB_URL,
  {},
  () => {
    console.log("db connected");
  },
  (err) => {
    console.log(err);
  }
);

// routes
app.use("/api/", userRoute);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
