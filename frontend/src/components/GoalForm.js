import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addGoal } from "../features/goals/goalSlice";

const GoalForm = () => {
  const [textContent, setTextContent] = useState("");
  const dispatch = useDispatch();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    dispatch(addGoal({textContent}));

    setTextContent("");
  };

  return (
    <section className="form">
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="textContent" className="goal-label">Add Goal</label>
          <input
            type="text"
            name="textContent"
            id="textContent"
            value={textContent}
            onChange={(e) => setTextContent(e.target.value)}
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
