// @desc Get Goals
// @route GET /api/goals
// @access Private
const getGoals = (req, res) => {
  res.status(200).json({ success: true, message: `Get Goals...` });
};

// @desc Add Goal
// @route POST /api/goals
// @access Private
const addGoal = (req, res) => {
  const name = req.body.name;

  if (!name) {
    res.status(400);
    throw new Error("Enter a valid goal...");
  }

  res.status(200).json({ success: true, message: `Add Goals...` });
};

// @desc Update Goal
// @route PUT /api/goals/:id
// @access Private
const updateGoal = (req, res) => {
  res
    .status(200)
    .json({ success: true, message: `Update Goal ${req.params.goalID}...` });
};

// @desc Delete Goals
// @route DELETE /api/goals/:id
// @access Private
const deleteGoal = (req, res) => {
  res
    .status(200)
    .json({ success: true, message: `Delete Goal ${req.params.goalID}...` });
};

module.exports = {
  getGoals,
  addGoal,
  updateGoal,
  deleteGoal,
};
