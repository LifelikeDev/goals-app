const express = require("express");
const {
  getGoals,
  addGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalsController");
const router = express.Router();

// router.route("/").get(getGoals).post(addGoal);
// router.route("/:goalID").put(updateGoal).delete(deleteGoal);

router.get("/", getGoals);

router.post("/", addGoal);

router.put("/:goalID", updateGoal);

router.delete("/:goalID", deleteGoal);

module.exports = router;
