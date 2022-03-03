const express = require("express");
const router = express.Router();
const { registerUser, loginUser, getCurrentUser } = require("../controllers/usersController");

const {protect} = require("../middleware/authMiddleware")

router.post("/", registerUser);

router.post("/login", loginUser);

router.get("/current", protect, getCurrentUser)

module.exports = router;
