import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {

    if(!user) navigate("/login");

  }, [user, navigate]);

  return (
    <>
      <h1>Dashboard</h1>
    </>
  );
};

export default Dashboard;
