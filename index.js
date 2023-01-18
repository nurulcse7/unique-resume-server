const express = require("express");
const cors = require("cors");
// const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
// const jwt = require("jsonwebtoken");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
// Author/Admin : Nurul Islam , email: nurul.cse7@gmail.com
// Middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
	res.send("unique Resume server is running");
});
app.listen(port, () => {
	console.log("Unique Resume port is running", port);
});



// const express = require("express");
// const app = express();
// require("dotenv").config();
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const mongoose = require("mongoose");
// const cookieParser = require("cookie-parser");
// const userRoute = require("./routes/userRoute");

// // middleware

// app.use(cors());
// app.use(bodyParser.json());
// app.use(cookieParser());

// //connect DB

// mongoose.connect(
//   process.env.DB_URL,
//   {},
//   () => {
//     console.log("db connected");
//   },
//   (err) => {
//     console.log(err);
//   }
// );

// // routes
// app.use("/api/", userRoute);

// const PORT = 5000;

// app.listen(PORT, () => {
//   console.log(`server is running on ${PORT}`);
// });
