import React, { useState } from "react";
import { destroyRoutine } from "../api-adapter";
import { RoutineActivity, EditRoutine } from "./";


//child component of MyRoutines that renders out each individual routines, is the parent routine of RoutineActivity when mapping over the activities of a specific routine, there are buttons that allow you to delete a routine and to edit the name, goal, and whether a routine is public or not

const SingleRoutine = (props) => {
  const setAddActivityToRoutineMenu = props.setAddActivityToRoutineMenu;
  const setEditRoutineMenu = props.setEditRoutineMenu;
  const setEditRoutineActivityMenu = props.setEditRoutineActivityMenu;
  const setSelectedRoutine = props.setSelectedRoutine;
  const allUserRoutines = props.allUserRoutines
  const setAllUserRoutines = props.setAllUserRoutines
  const [routine, setRoutine] = useState(props.routine)
  const [selectedActivityRoutine, setSelectedActivityRoutine] = useState();
  const [routinesActivities, setRoutinesActivities] = useState([routine.activities])
  const editRoutineMenu = props.editRoutineMenu
  const editRoutineActivityMenu = props.editRoutineActivityMenu
  const selectedRoutine = props.selectedRoutine

  async function openAddActivityToRoutineMenu() {
    setAddActivityToRoutineMenu(true);
    setSelectedRoutine(routine);
  }

  async function openEditRoutineMenu() {
    setEditRoutineMenu(true);
    setSelectedRoutine(routine)
  }

  async function deleteRoutine() {
    const id = routine.id;
    const response = await destroyRoutine(routine.id);

    !response.error && setRoutine(false)

  }

  return (<>{routine ?
    <div className="oneRoutine">
      <h2>
        {routine.name}
        <span
          alt="Edit Routine"
          onClick={openEditRoutineMenu}
          className="material-symbols-outlined"
        >
          edit
        </span>
        <span
          alt="Delete Routine"
          onClick={deleteRoutine}
          className="material-symbols-outlined"
        >
          delete
        </span>
      </h2>
      <p>
        <span>Available Publicly?: </span>
        {routine.isPublic ? <span>Yes</span> : <span>No</span>}
      </p>
      <p> Goals: {routine.goal} </p>
      <p> Activities: </p>
      <ul>
        {routine && routine.activities
          ? routine.activities.map((activity, index) => {
              return (
                <div
                  className="oneRoutineActivity"
                  key={activity.routineActivityId}
                >
                  <RoutineActivity
                    activity={activity}
                    setEditRoutineActivityMenu={setEditRoutineActivityMenu}
                    routinesActivities={routinesActivities}
                    setRoutinesActivities={setRoutinesActivities}
                    editRoutineActivityMenu = {editRoutineActivityMenu}
                  />
                </div>
              );
            })
          : null}
        <li id="addActivityToRoutine">
          <span
            className="material-symbols-outlined"
            onClick={openAddActivityToRoutineMenu}
            alt="Add and Activity to the Routine"
          >
            add_circle
          </span>
          <span>Add an Activity to the Routine</span>
        </li>
      </ul>
      <EditRoutine
        editRoutineMenu={editRoutineMenu}
        setEditRoutineMenu={setEditRoutineMenu}
        routine = {routine}
        selectedRoutine={selectedRoutine}
        />
    </div>
 :null}</> );
};

export default SingleRoutine;
