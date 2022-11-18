import React from "react";
import { destroyRoutineActivity } from "../api-adapter";

//child component of SingleRoutine that renders out each individual routines, contains buttons that allows you to edit the duration and count or delete a routine activity

const RoutineActivity = (props) => {
  const activity = props.activity;
  const setEditRoutineActivityMenu = props.setEditRoutineActivityMenu;

  async function deleteRoutineActivity() {
    const routineId = activity.routineActivityId;
    const response = await destroyRoutineActivity(activity.routineActivityId);

    //needs to rerender the routines here
  }

  async function openEditRoutineActivityMenu() {
    setEditRoutineActivityMenu(true);
  }

  return (
    <>
      <li>
        {activity.name}
        <span
          alt="Edit Routine Activity Duration and Count"
          onClick={openEditRoutineActivityMenu}
          className="material-symbols-outlined"
        >
          edit
        </span>
        <span
          alt="Delete Routine Activity"
          onClick={deleteRoutineActivity}
          className="material-symbols-outlined"
        >
          delete
        </span>
      </li>
      <ul>
        <li> Duration: {activity.duration} minutes</li>
        <li> Count: {activity.count} repetitions</li>
      </ul>
    </>
  );
};

export default RoutineActivity;
