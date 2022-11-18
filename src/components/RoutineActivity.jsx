import React, { useState } from "react";
import { destroyRoutineActivity } from "../api-adapter";
import EditRoutineActivity from "./EditRoutineActivity";

//child component of SingleRoutine that renders out each individual routines, contains buttons that allows you to edit the duration and count or delete a routine activity

const RoutineActivity = (props) => {
  const setEditRoutineActivityMenu = props.setEditRoutineActivityMenu;
  const routinesActivities = props.routinesActivities;
  const setRoutinesActivities = props.setRoutinesActivities;
  const [activity, setActivity] = useState(props.activity);
  const editRoutineActivityMenu = props.editRoutineActivityMenu;
  const [selectedActivity, setSelectedActivity] = useState({});

  async function deleteRoutineActivity() {
    const routineId = activity.routineActivityId;
    const response = await destroyRoutineActivity(activity.routineActivityId);

    !response.error && setActivity(false);
  }

  async function openEditRoutineActivityMenu() {
    setEditRoutineActivityMenu(true);
    setSelectedActivity(activity.routineActivityId);
  }

  return (
    <>
      {activity ? (
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
          <EditRoutineActivity
            editRoutineActivityMenu={editRoutineActivityMenu}
            setEditRoutineActivityMenu={setEditRoutineActivityMenu}
            activity={activity}
            selectedActivity = {selectedActivity}
            setSelectedActivity = {setSelectedActivity}
          />
        </>
      ) : null}
    </>
  );
};

export default RoutineActivity;
