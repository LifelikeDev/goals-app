const express = require("express");
const router = express.Router();

router.get("/api/goals", (req, res) => {
  res.status(200).json({ success: true, message: "My Goals..." });
});

module.exports = router;
