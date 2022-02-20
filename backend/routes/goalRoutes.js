const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ success: true, message: `Get Goals...` });
});

router.post("/", (req, res) => {
  res.status(200).json({ success: true, message: `Add Goals...` });
});

router.put("/:goalID", (req, res) => {
  res
    .status(200)
    .json({ success: true, message: `Update Goal ${req.params.goalID}...` });
});

router.delete("/:goalID", (req, res) => {
  res
    .status(200)
    .json({ success: true, message: `Delete Goal ${req.params.goalID}...` });
});

module.exports = router;
