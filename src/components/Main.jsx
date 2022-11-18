import React, { useEffect, useState } from "react";
import { Navbar, Activities, Home, MyRoutines, Routines, UsersRoutines } from "./";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  getActivities,
  getRoutines,
  userRoutines,
  userInfo,
} from "../api-adapter";

const Main = () => {
  const [allRoutines, setAllRoutines] = useState([]);
  const [allActivities, setAllActivities] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState(null);
  const [allUserRoutines, setAllUserRoutines] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [specificUser, setSpecificUser] = useState()
  const [selectedRoutine, setSelectedRoutine] = useState({});


  //checking if there is a token in local storage
  useEffect(() => {
    const userLogIn = localStorage.getItem("token");
    if (userLogIn) {
      setLoggedIn(userLogIn);

      const fetchData = async () => {
        const data = await userInfo();

        setCurrentUser(data);
      };
      fetchData();
    }
  }, [loggedIn]);

  useEffect(() => {
    const fetchMoreData = async () => {
      const moreData = await userRoutines(currentUser.username);

      setAllUserRoutines(moreData);
    };
    fetchMoreData();
  }, [currentUser]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getRoutines();

      setAllRoutines(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getActivities();

      setAllActivities(data);
    };
    fetchData();
  }, []);

  return (
    <Router>
      <div id="main">
        <Navbar setLoggedIn={setLoggedIn} error={error} setError={setError} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/activities"
            element={
              <Activities
                allActivities={allActivities}
                error={error}
                setError={setError}
                setAllActivities={setAllActivities}
              />
            }
          />
          <Route
            path="/myroutines"
            element={
              <MyRoutines
                allUserRoutines={allUserRoutines}
                setAllUserRoutines={setAllUserRoutines}
                allActivities={allActivities}
                allRoutines={allRoutines}
                setAllRoutines={setAllRoutines}
                currentUser={currentUser}
                selectedRoutine={selectedRoutine}
                setSelectedRoutine={setSelectedRoutine}
              />
            }
          />
          <Route
            path="/routines"
            element={<Routines allRoutines={allRoutines} setSpecificUser={setSpecificUser}/>}
          />
          <Route
            path="/UsersRoutines"
            element={<UsersRoutines specificUser={specificUser}/>}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default Main;
