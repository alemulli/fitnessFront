import React,{useState} from "react";
import {RoutineActivity} from "./";

const SingleRoutine = (props) => {
  const routine = props.routine;
  const setAddActivityToRoutineMenu = props.setAddActivityToRoutineMenu;
  const setEditRoutineMenu = props.setEditRoutineMenu;
  const setEditRoutineActivityMenu = props.setEditRoutineActivityMenu;
  const setSelectedRoutine = props.setSelectedRoutine;
  const [selectedActivityRoutine, setSelectedActivityRoutine] = useState();

  async function openAddActivityToRoutineMenu() {
    setAddActivityToRoutineMenu(true);
    setSelectedRoutine(routine.id);
  }

  async function openEditRoutineMenu() {
    setEditRoutineMenu(true);
  }

  async function deleteRoutine() {
    console.log(
      "hey, you didn't delete anything because we haven't written the function"
    );
  }


  return (
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
                  activity = {activity} />
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
    </div>
  );
};

export default SingleRoutine;
