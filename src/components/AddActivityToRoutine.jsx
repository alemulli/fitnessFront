import React, { useState } from "react";
import { addActivityToRoutine } from "../api-adapter";

const AddActivityToRoutine = (props) => {
  const addActivityToRoutineMenu = props.addActivityToRoutineMenu;
  const setAddActivityToRoutineMenu = props.setAddActivityToRoutineMenu;
  const allActivities = props.allActivities;

  const [routineActivityInfo, setRoutineActivityInfo] = useState({
    name: "",
    duration:"",
    count: ""
})

  async function closeAddActivityToRoutineMenu () {
    setAddActivityToRoutineMenu(false)
}

async function handleSubmit(event) {
    console.log('hi')
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
        >
          close
        </span>
        <form onSubmit={handleSubmit}>
          <h3>Add an Activity</h3>
          <label htmlFor="pickActivity"> Pick an activity to attach to the routine: </label>
          <select id="pickActivity">
            {allActivities
              ? allActivities.map((activity, index) => {
                  return (
                    <option value={activity.name} key={activity.id}>
                      {activity.name}
                    </option>
                  );
                })
              : null}
          </select>
          <label htmlFor="count">Count: </label>
          <input
            id="name"
            type="number"
            onChange={(e) =>
                setRoutineActivityInfo({ ...routineActivityInfo, name: e.target.value })
            }
            value={routineActivityInfo.name}
            required
          />
          <br />
          <label htmlFor="duration"> Duration: </label>
          <input
            id="description"
            type="number"
            onChange={(e) =>
                setRoutineActivityInfo({ ...routineActivityInfo, description: e.target.value })
            }
            value={routineActivityInfo.description}
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
