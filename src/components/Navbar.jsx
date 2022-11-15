import React from "react";
import { NavLink } from "react-router-dom";
import { Logo } from "./"

const Navbar = (props) => {
  const setLoggingIn=props.setLoggingIn
  const setRegistering=props.setRegistering
  const setLoggedIn = props.setLoggedIn
  async function startLoginMenu () {
    setLoggingIn(true)
  }

  async function startRegisterMenu () {
    setRegistering(true)
  }

  async function logout () {
    localStorage.removeItem("token")
    setLoggedIn(false)
  }

  return (
    <div id="navbar">
      <div id="logo"><Logo /></div>
      <h2>Fitness Trackr</h2>
      <div className="menuContainer">
      <NavLink to="/"><button>HOME</button></NavLink>
      <span>  -  </span>
      <NavLink to="/routines"><button>ROUTINES</button></NavLink>
      <span>  -  </span>
      <NavLink to="/activities"><button>ACTIVITIES</button></NavLink>
      <span>  -  </span>
        {!localStorage.token ? (
          <>
          <button className="loginButton" onClick={startLoginMenu}>
          LOGIN
        </button>
        <span>  -  </span>
        <button className="registerButton" onClick={startRegisterMenu}>
          REGISTER
          </button>
          </>
        ):(
          <>
          <NavLink to="/myroutines">
            <button>MY ROUTINES</button>
            </NavLink>            
            <span>  -  </span>
            <button className="logOutButton" onClick={logout}>LOGOUT</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
