const asyncHandler = require("express-async-handler");
const Goal = require("../models/goalModel");

// @desc Get Goals
// @route GET /api/goals
// @access Private
const getGoals = asyncHandler(async (req, res) => {
  const allGoals = await Goal.find();

  res.status(200).json(allGoals);
});

// @desc Add Goal
// @route POST /api/goals
// @access Private
const addGoal = asyncHandler(async (req, res) => {
  const text = req.body.text;

  if (!text) {
    res.status(400);
    throw new Error("Enter a valid goal...");
  }

  const newGoal = await Goal.create({ text: text });

  res.status(200).json(newGoal);
});

// @desc Update Goal
// @route PUT /api/goals/:id
// @access Private
const updateGoal = asyncHandler(async (req, res) => {
  const id = req.params.goalID;
  const currentGoal = await Goal.findById(id);

  if (!currentGoal) {
    res.status(404);
    throw new Error(`Goal with ID ${id} not found...`);
  }

  const updatedGoal = await  Goal.findByIdAndUpdate(id, req.body, { new: true });

  res.status(200).json(updatedGoal);
});

// @desc Delete Goals
// @route DELETE /api/goals/:id
// @access Private
const deleteGoal = asyncHandler(async (req, res) => {

  const id = req.params.goalID;
  const currentGoal = await Goal.findById(id);

  if (!currentGoal) {
    res.status(404);
    throw new Error(`Goal with ID ${id} not found...`);
  }

  await currentGoal.remove();

  res
    .status(200)
    .json({ success: true, message: `Goal with ID ${id} successfully deleted...` });
});

module.exports = {
  getGoals,
  addGoal,
  updateGoal,
  deleteGoal,
};
