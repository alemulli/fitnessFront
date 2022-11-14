import React, { useEffect, useState } from "react";
import { 
  Navbar, 
  Activities, 
  Home, 
  MyRoutines,
  Routines,
  Login,
  Register,
 } from './'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom"
import {
  getActivities,
  getRoutines
} from "../api-adapter"

const Main = () => {
  const [allRoutines, setAllRoutines] = useState([])
  const [allActivities, setAllActivities] = useState ([])
  const [loggingIn, setLoggingIn] = useState(false)
  const [registering, setRegistering] = useState(false)

  useEffect(()=>{
    const fetchData = async () => {
      const data = await getRoutines();

      setAllRoutines(data);
    }
    fetchData();
  }, [])


  useEffect(() => {
    const fetchData = async () => {
      const data = await getActivities();

      setAllActivities(data);
    }
    fetchData();
  }, [])


  return (
    <Router>
      <div id="main">
        <Navbar setLoggingIn={setLoggingIn} setRegistering={setRegistering}/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/activities" element={<Activities allActivities={allActivities}/>} />
            <Route path="/myroutines" element={<MyRoutines />} />
            <Route path="/routines" element={<Routines allRoutines={allRoutines}/>} />
          </Routes>
          <Login loggingIn={loggingIn} setLoggingIn={setLoggingIn} />
          <Register registering={registering} setRegistering={setRegistering} />
      </div>
    </Router>
  );
};

export default Main;
