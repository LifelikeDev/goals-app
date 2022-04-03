import React from "react";

const GoalItem = ({ goal }) => {
  return (
    <div className="goal">
      <div>
        {new Date(goal.createdAt).toLocaleString("en-US")}
      </div>
      <p className="goal-item">{goal.textContent}</p>
    </div>
  );
};

export default GoalItem;
