import React, { useEffect, useState } from "react";
import {
  Navbar,
  Activities,
  Home,
  MyRoutines,
  Routines,
  Login,
  Register,
  CreateActivity,
  CreateRoutine,
  AddActivityToRoutine,
  EditRoutine,
  EditRoutineActivity,
} from "./";
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
  const [loggingIn, setLoggingIn] = useState(false);
  const [registering, setRegistering] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState(null);
  const [addActivityMenu, setAddActivityMenu] = useState(false);
  const [allUserRoutines, setAllUserRoutines] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [addRoutineMenu, setAddRoutineMenu] = useState(false);
  const [addActivityToRoutineMenu, setAddActivityToRoutineMenu] = useState(false);
  const [editRoutineMenu, setEditRoutineMenu] = useState(false);
  const [editRoutineActivityMenu, setEditRoutineActivityMenu] = useState(false);

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
      //then
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
        <Navbar
          setLoggingIn={setLoggingIn}
          setRegistering={setRegistering}
          setLoggedIn={setLoggedIn}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/activities"
            element={
              <Activities
                allActivities={allActivities}
                setAddActivityMenu={setAddActivityMenu}
              />
            }
          />
          <Route
            path="/myroutines"
            element={
              <MyRoutines
                allUserRoutines={allUserRoutines}
                setAllUserRoutines={setAllUserRoutines}
                setAddRoutineMenu={setAddRoutineMenu}
                allActivities={allActivities}
                setAddActivityToRoutineMenu = {setAddActivityToRoutineMenu}
                setEditRoutineMenu={setEditRoutineMenu}
                setEditRoutineActivityMenu={setEditRoutineActivityMenu}
              />
            }
          />
          <Route
            path="/routines"
            element={<Routines allRoutines={allRoutines} />}
          />
        </Routes>
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
        <CreateActivity
          addActivityMenu={addActivityMenu}
          setAddActivityMenu={setAddActivityMenu}
          error={error}
          setError={setError}
          allActivities={allActivities}
          setAllActivities={setAllActivities}
        />
        <CreateRoutine
          addRoutineMenu={addRoutineMenu}
          setAddRoutineMenu={setAddRoutineMenu}
          allRoutines={allRoutines}
          setAllRoutines={setAllRoutines}
          currentUser={currentUser}
          allUserRoutines={allUserRoutines}
          setAllUserRoutines={setAllUserRoutines}
        />
        <AddActivityToRoutine
          addActivityToRoutineMenu={addActivityToRoutineMenu}
          setAddActivityToRoutineMenu={setAddActivityToRoutineMenu}
          allActivities={allActivities}
        />
        <EditRoutine 
          editRoutineMenu={editRoutineMenu}
          setEditRoutineMenu={setEditRoutineMenu}
        />
        <EditRoutineActivity 
          editRoutineActivityMenu={editRoutineActivityMenu}
          setEditRoutineActivityMenu={setEditRoutineActivityMenu}
        />
      </div>
    </Router>
  );
};

export default Main;
