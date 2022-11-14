import React from "react";

const Navbar = () => {
  return (
    <div id="navbar">
      <h2>Tracker Menu</h2>
      <div className="menuContainer">
        <span>Home</span>
        <span>Routines</span>
        <span>Activities</span>
        <span>
          Login
        </span>
        <span>Register</span>
      </div>
    </div>
  );
};

export default Navbar;
