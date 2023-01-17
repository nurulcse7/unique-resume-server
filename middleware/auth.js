const { User } = require("../models/userModels");
const jwt = require("jsonwebtoken");

exports.isAuthenticatedUser = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return res.status(401).send("Unauthorized request");
  }
  if (token) {
    const decodedData = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = await User.findById(decodedData._id);
    next();
  } else {
    return res.status(401).json({
      success: false,
      message: "Please Login to access this resource",
    });
  }
};
