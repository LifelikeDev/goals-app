const express = require("express");
const {
  getGoals,
  addGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalsController");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");

router.get("/", protect, getGoals);

router.post("/", protect, addGoal);

router.put("/:goalID", protect, updateGoal);

router.delete("/:goalID", protect, deleteGoal);

module.exports = router;
