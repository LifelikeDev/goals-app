import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import GoalForm from "../components/GoalForm";
import Spinner from "../components/Spinner";
import { getGoals, reset } from "../features/goals/goalSlice";
import GoalItem from "../components/GoalItem";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { goals, isLoading, isError, message } = useSelector((state) => state.goals)

  useEffect(() => {
    if(isError) alert(message);

    if(!user) navigate("/login");

    dispatch(getGoals())

    // reset on component onMount
    return () => dispatch(reset());

  }, [user, navigate, isError, message, dispatch]);


  if(isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section className="heading">
        <h3>Welcome {user && user.name} 👋</h3>
        <p>Goals Dashboard</p>

        <GoalForm />

        <section className="content">
          {goals.length > 0 ? (
            <div className="goals">
              {goals.map((goal) => (
                <GoalItem key={goal._id} goal={goal} />
              ))}
            </div>
          ) : (
            <h4>You currently do not have any goals</h4>
          )}
        </section>
      </section>
    </>
  );
};

export default Dashboard;
