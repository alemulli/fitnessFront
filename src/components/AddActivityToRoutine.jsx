import React, { useState } from "react";
import { addActivityToRoutine } from "../api-adapter";

const AddActivityToRoutine = (props) => {
  const addActivityToRoutineMenu = props.addActivityToRoutineMenu;
  const setAddActivityToRoutineMenu = props.setAddActivityToRoutineMenu;
  const allActivities = props.allActivities;
  const selectedRoutine = props.selectedRoutine;
  const setSelectedRoutine = props.setSelectedRoutine;

  const [routineActivityInfo, setRoutineActivityInfo] = useState({
    id: "",
    duration: "",
    count: "",
  });

  async function closeAddActivityToRoutineMenu() {
    setAddActivityToRoutineMenu(false);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const routineId = selectedRoutine;
    const activityId = routineActivityInfo.id;
    const duration = routineActivityInfo.duration;
    const count = routineActivityInfo.count;
    const response = await addActivityToRoutine(
      routineId,
      activityId,
      count,
      duration
    );

    setSelectedRoutine();
    setRoutineActivityInfo({ id: "", duration: "", count: "" });
    setAddActivityToRoutineMenu(false)

  }

  return (
    <div
      className={`${addActivityToRoutineMenu}`}
      id="addActivityToRoutineMenu"
    >
      <div className="addActivityToRoutineMenu">
        <span
          className="material-symbols-outlined"
          onClick={closeAddActivityToRoutineMenu}
          alt="Close Menu"
        >
          close
        </span>
        <form onSubmit={handleSubmit}>
          <h3>Add an Activity</h3>
          <label htmlFor="pickActivity">
            
            Pick an activity to attach to the routine:
          </label>
          <select id="pickActivity">
            {allActivities
              ? allActivities.map((activity, index) => {
                  return (
                    <option value={activity.id} key={activity.id}>
                      {activity.name}
                    </option>
                  );
                })
              : null}
          </select>
          <label htmlFor="count">Count: </label>
          <input
            id="count"
            type="number"
            onChange={(e) =>
              setRoutineActivityInfo({
                ...routineActivityInfo,
                count: e.target.value,
              })
            }
            value={routineActivityInfo.count}
            required
          />
          <br />
          <label htmlFor="duration"> Duration: </label>
          <input
            id="duration"
            type="number"
            onChange={(e) =>
              setRoutineActivityInfo({
                ...routineActivityInfo,
                duration: e.target.value,
              })
            }
            value={routineActivityInfo.duration}
            required
          />

          <br />
          <button className="submitButton" type="submit">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddActivityToRoutine;
