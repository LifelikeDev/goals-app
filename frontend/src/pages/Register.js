import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaUser } from "react-icons/fa";
import { register, reset } from "../features/auth/authSlice";
import Spinner from "../components/Spinner";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmedPassword: "",
  });

  const { name, email, password, confirmedPassword } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {user, isLoading, isSuccess, isError, message } = useSelector((state) => state.auth);

  // useEffect
  useEffect(() => {
    if(isError) {
      toast.error(message);
    }

    if(isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());

  }, [user, isLoading, isSuccess, isError, message, navigate, dispatch])

  const handleFormChange = (e) => {
    setFormData((previousState) => ({
      ...previousState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmedPassword) {
      toast.error("Passwords do not match");
    } else {
      const userData = { name, email, password };

      dispatch(register(userData));
    }
    
  };

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <section className="heading">
        <h4>
          <FaUser /> Register
        </h4>
        <p>Add an account</p>
      </section>

      <section className="form">
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={name}
              placeholder="Enter name"
              onChange={handleFormChange}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={email}
              placeholder="Enter email"
              onChange={handleFormChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={password}
              placeholder="Enter password"
              onChange={handleFormChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="confirmedPassword"
              name="confirmedPassword"
              value={confirmedPassword}
              placeholder="Confirm password"
              onChange={handleFormChange}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-block">
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Register;
