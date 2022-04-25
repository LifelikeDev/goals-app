import React from "react";
import { useDispatch } from "react-redux";
import { FaTimes } from "react-icons/fa";
import { deleteGoal, getGoals } from "../features/goals/goalSlice";

const GoalItem = ({ goal }) => {
  const dispatch = useDispatch();

  const handleDeleteGoal = async (goalId) => {
    await dispatch(deleteGoal(goalId));
    await dispatch(getGoals());
  }

  return (
    <div className="goal">
      <div>{new Date(goal.createdAt).toLocaleString("en-US")}</div>
      <p className="goal-item">{goal.textContent}</p>
      <button className="close" onClick={() => handleDeleteGoal(goal._id)}>
        <FaTimes />
      </button>
    </div>
  );
};

export default GoalItem;
