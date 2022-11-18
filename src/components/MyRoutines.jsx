import React, { useState } from "react";
import {
  CreateRoutine,
  AddActivityToRoutine,
  EditRoutine,
  EditRoutineActivity,
  SingleRoutine,
} from "./";

//component renders all routines a user has created in the db, there is a button that allows you to add a new routine, this is the parent element of a component that renders each individual routine

const MyRoutines = (props) => {
  const allUserRoutines = props.allUserRoutines;
  const setAllUserRoutines = props.setAllUserRoutines;
  const allRoutines = props.allRoutines;
  const setAllRoutines = props.setAllRoutines;
  const currentUser = props.currentUser;
  const allActivities = props.allActivities;
  const selectedRoutine = props.selectedRoutine;
  const setSelectedRoutine = props.setSelectedRoutine;

  const [addRoutineMenu, setAddRoutineMenu] = useState(false);
  const [addActivityToRoutineMenu, setAddActivityToRoutineMenu] =
    useState(false);
  const [editRoutineMenu, setEditRoutineMenu] = useState(false);
  const [editRoutineActivityMenu, setEditRoutineActivityMenu] = useState(false);

  async function openAddRoutineMenu() {
    setAddRoutineMenu(true);
  }

  return (
    <div id="myRoutines">
      <h2>myRoutines</h2>
      {localStorage.getItem("token") ? (
        <>
          <span
            className="material-symbols-outlined"
            onClick={openAddRoutineMenu}
            alt="Add a New Routine"
          >
            add_circle
          </span>
          <span> Add a New Routine </span>
        </>
      ) : null}
      <div className="myRoutines">
        {allUserRoutines && allUserRoutines.length ? (
          allUserRoutines.map((routine, index) => {
            return (
              <SingleRoutine
                key={`${routine.id}`}
                routine={routine}
                setAddActivityToRoutineMenu={setAddActivityToRoutineMenu}
                setEditRoutineMenu={setEditRoutineMenu}
                setEditRoutineActivityMenu={setEditRoutineActivityMenu}
                setSelectedRoutine={setSelectedRoutine}
                editRoutineMenu = {editRoutineMenu}
                editRoutineActivityMenu = {editRoutineActivityMenu}
              />
            );
          })
        ) : (
          <p>You have no routines yet!</p>
        )}
      </div>
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
        setSelectedRoutine={setSelectedRoutine}
        selectedRoutine={selectedRoutine}
        allUserRoutines={allUserRoutines}
        setAllUserRoutines={setAllUserRoutines}
      />
      
    </div>
  );
};

export default MyRoutines;
