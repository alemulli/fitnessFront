import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  const setLoggingIn=props.setLoggingIn
  const setRegistering=props.setRegistering

  async function startLoginMenu () {
    setLoggingIn(true)
  }

  async function startRegisterMenu () {
    setRegistering(true)
  }

  async function logout () {
    console.log("The logout button was pressed!")
  }

  return (
    <div id="navbar">
      <div id="logo">LogoHere</div>
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
            <button>My Routines</button>
            </NavLink>            
            <span>  -  </span>
            <button className="logOutButton" onClick={logout}>Logout</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
