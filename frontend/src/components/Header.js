import React from "react";
import { FaUser, FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { reset, logout } from "../features/auth/authSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    dispatch(reset());

    navigate("/");
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <h4>P. Goals App</h4>
        </Link>
      </div>
      <ul>
        {user ? (
          <li>
            <Link to="/logout">
              <FaSignOutAlt /> Logout
            </Link>
          </li>
        ) : (
          <>
            <li>
              <button className="btn" onClick={handleLogout}>
                <FaSignInAlt /> Login
              </button>
            </li>
            <li>
              <Link to="/register">
                <FaUser /> Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  );
};

export default Header;
