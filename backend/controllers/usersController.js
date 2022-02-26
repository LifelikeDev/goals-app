// @desc Register User
// @route POST /api/users
// @access Public
const registerUser = (req, res) => {
  res.json({ message: "User registered" });
};

// @desc Authenticate User
// @route POST /api/users/login
// @access Public
const loginUser = (req, res) => {
  res.json({ message: "User logged in" });
};

// @desc Get User Data
// @route GET /api/users/current
// @access Public
const getCurrentUser = (req, res) => {
  res.json({ message: "Current User Data" });
};

module.exports = {
  registerUser,
  loginUser,
  getCurrentUser,
};
