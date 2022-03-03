const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const protect = asyncHandler(async (req, res, next) => {
  let authorization = req.headers.authorization;
  let token;

  if (authorization && authorization.startsWith("Bearer")) {
    try {
      // Get token from headers
      token = authorization.split(" ")[1];

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Get user from the token
      const user = await User.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error("You are not authorized to access this content");
    }
  }

  if (!token) {
    res.status(400);
    throw new Error("Not authorized. No token recognized");
  }
});

module.exports = protect;