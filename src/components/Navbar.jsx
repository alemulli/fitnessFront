import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { Logo, Login, Register } from "./";

//navbar with links to Home, Routines, and Activities; if you are not logged in you can either log in or register, if you are logged in you can view the my routines tab or logout

const Navbar = (props) => {
  const setLoggedIn = props.setLoggedIn;
  const error = props.error;
  const setError = props.setError;

  const [loggingIn, setLoggingIn] = useState(false);
  const [registering, setRegistering] = useState(false);

  const navigate = useNavigate();

  async function startLoginMenu() {
    setLoggingIn(true);
  }

  async function startRegisterMenu() {
    setRegistering(true);
  }

  async function logout() {
    localStorage.removeItem("token");
    setLoggedIn(false);
    navigate("/");
  }

  return (
    <div id="navbar">
      <div id="logo">
        <Logo />
      </div>
      <h2>Fitness Trackr</h2>
      <div className="menuContainer">
        <NavLink to="/">
          <button>HOME</button>
        </NavLink>
        <span> - </span>
        <NavLink to="/routines">
          <button>ROUTINES</button>
        </NavLink>
        <span> - </span>
        <NavLink to="/activities">
          <button>ACTIVITIES</button>
        </NavLink>
        <span> - </span>
        {!localStorage.token ? (
          <>
            <button className="loginButton" onClick={startLoginMenu}>
              LOGIN
            </button>
            <span> - </span>
            <button className="registerButton" onClick={startRegisterMenu}>
              REGISTER
            </button>
          </>
        ) : (
          <>
            <NavLink to="/myroutines">
              <button>MY ROUTINES</button>
            </NavLink>
            <span> - </span>
            <button className="logOutButton" onClick={logout}>
              LOGOUT
            </button>
          </>
        )}
      </div>
      <Login
        loggingIn={loggingIn}
        setLoggingIn={setLoggingIn}
        setLoggedIn={setLoggedIn}
        error={error}
        setError={setError}
      />
      <Register
        registering={registering}
        setRegistering={setRegistering}
        setLoggedIn={setLoggedIn}
        error={error}
        setError={setError}
      />
    </div>
  );
};

export default Navbar;
