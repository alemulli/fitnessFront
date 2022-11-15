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
  const [loggedIn, setLoggedIn] = useState(false)
  const [error, setError] = useState(null)

  //checking if there is a token in local storage
  useEffect(() => {
    const userLogIn = localStorage.getItem("token")
    if (userLogIn) {
      setLoggedIn(userLogIn)
    }
  }, [loggedIn])

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
        <Navbar setLoggingIn={setLoggingIn} setRegistering={setRegistering} setLoggedIn={setLoggedIn}/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/activities" element={<Activities allActivities={allActivities}/>} />
            <Route path="/myroutines" element={<MyRoutines />} />
            <Route path="/routines" element={<Routines allRoutines={allRoutines}/>} />
          </Routes>
          <Login loggingIn={loggingIn} setLoggingIn={setLoggingIn} setLoggedIn={setLoggedIn} error={error} setError={setError}/>
          <Register registering={registering} setRegistering={setRegistering} setLoggedIn={setLoggedIn} error={error} setError={setError}/>
      </div>
    </Router>
  );
};

export default Main;
