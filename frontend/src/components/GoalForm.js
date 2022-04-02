import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addGoal } from "../features/goals/goalSlice";

const GoalForm = () => {
  const [goalText, setGoalText] = useState("");
  const dispatch = useDispatch();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    dispatch(addGoal({goalText}));

    setGoalText("");
  };

  return (
    <section className="form">
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="goalText" className="goal-label">Add Goal</label>
          <input
            type="text"
            name="goalText"
            id="goalText"
            value={goalText}
            onChange={(e) => setGoalText(e.target.value)}
          />
        </div>
        <div className="form-group">
            <button type="submit" className="btn btn-block">
              Add
            </button>
          </div>
      </form>
    </section>
  );
};

export default GoalForm;
