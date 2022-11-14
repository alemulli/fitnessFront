import React from "react";
import { 
  Navbar, 
  Activities, 
  Home, 
  MyRoutines,
  Routines,
 } from './'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom"

const Main = () => {
  return (
    <Router>
      <div id="main">
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/myroutines" element={<MyRoutines />} />
            <Route path="/routines" element={<Routines />} />
          </Routes>
      </div>
    </Router>
  );
};

export default Main;
