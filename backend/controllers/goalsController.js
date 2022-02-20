const getGoals = (req, res) => {
  res.status(200).json({ success: true, message: `Get Goals...` });
};

const addGoal = (req, res) => {
  res.status(200).json({ success: true, message: `Add Goals...` });
};

const updateGoal = (req, res) => {
  res
    .status(200)
    .json({ success: true, message: `Update Goal ${req.params.goalID}...` });
};

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
