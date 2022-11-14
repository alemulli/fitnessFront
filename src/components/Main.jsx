import React, { useEffect, useState } from "react";
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
import {
  getRoutines
} from "../api-adapter"

const Main = () => {
  const [allRoutines, setAllRoutines] = useState([])

  useEffect(()=>{
    const fetchData = async () => {
      const data = await getRoutines();

      setAllRoutines(data);
    }
    fetchData();
  }, [])

  return (
    <Router>
      <div id="main">
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/myroutines" element={<MyRoutines />} />
            <Route path="/routines" element={<Routines allRoutines={allRoutines}/>} />
          </Routes>
      </div>
    </Router>
  );
};

export default Main;
