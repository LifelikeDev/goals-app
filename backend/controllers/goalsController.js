const asyncHandler = require("express-async-handler");
const Goal = require("../models/goalModel");
const User = require("../models/userModel")

// @desc Get Goals
// @route GET /api/goals
// @access Private
const getGoals = asyncHandler(async (req, res) => {
  const userGoals = await Goal.find({ user: req.user.id })

  res.status(200).json(userGoals);
});

// @desc Add Goal
// @route POST /api/goals
// @access Private
const addGoal = asyncHandler(async (req, res) => {
  const textContent = req.body.textContent;
  const userId = req.user.id;

  if (!textContent) {
    res.status(400);
    throw new Error("Enter a valid goal...");
  }

  const newGoal = await Goal.create({ textContent, user: userId });

  res.status(200).json(newGoal);
});

// @desc Update Goal
// @route PUT /api/goals/:id
// @access Private
const updateGoal = asyncHandler(async (req, res) => {
  const id = req.params.goalID;
  const goal = await Goal.findById(id);

  if (!goal) {
    res.status(404);
    throw new Error(`Goal with ID ${id} not found...`);
  }

  // Check for user
  if (!req.user) {
    res.status(401)
    throw new Error("User not found")
  }

  // Check if logged in user matches the goal user
  if(goal.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error("User not authorized")
  }

  const updatedGoal = await  Goal.findByIdAndUpdate(id, req.body, { new: true });

  res.status(200).json(updatedGoal);
});

// @desc Delete Goals
// @route DELETE /api/goals/:id
// @access Private
const deleteGoal = asyncHandler(async (req, res) => {
  const id = req.params.goalID;
  const goal = await Goal.findById(id);

  if (!goal) {
    res.status(404);
    throw new Error(`Goal with ID ${id} not found...`);
  }

  // Check if user exists
  if(!req.user) {
    res.status(401)
    throw new Error("User not found")
  }

  // Check if logged in user matches the goal user
  if(goal.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error("User not authorized")
  }

  await goal.remove();

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
