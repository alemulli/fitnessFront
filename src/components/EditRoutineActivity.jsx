import React, { useState } from "react";
import { editRoutineActivity } from "../api-adapter";

//Menu that allows you to edit the duration and count of a routine activity

const EditRoutineActivity = (props) => {
  const editRoutineActivityMenu = props.editRoutineActivityMenu;
  const setEditRoutineActivityMenu = props.setEditRoutineActivityMenu;
  const activity = props.activity;
  const selectedActivity = props.selectedActivity
  //props for updating allUserRoutines?
  //props for errors?

  //the initial states will probably change to a literal of what the value is of the routine we are trying to edit is before we edit them
  const [editRoutineActivityInfo, setEditRoutineActivityInfo] = useState({
    count: selectedActivity.count,
    duration: selectedActivity.duration,
  });

  async function closeEditRoutineActivityMenu() {
    setEditRoutineActivityMenu(false);
    //setError(null)? if we need errors on this one
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const activityId = selectedActivity;
    const count = editRoutineActivityInfo.count;
    const duration = editRoutineActivityInfo.duration;
    const response = await editRoutineActivity(activityId, count, duration);
    setEditRoutineActivityMenu(false);
  }

  return (
    <div className={`${editRoutineActivityMenu}`} id="editRoutineActivityMenu">
      <div className="editMenu">
        <span
          className="material-symbols-outlined"
          onClick={closeEditRoutineActivityMenu}
          alt="Close Menu"
        >
          close
        </span>
        <form onSubmit={handleSubmit}>
          <h3>Edit Activity</h3>
          <label htmlFor="count1">Count: </label>
          <input
            id="count1"
            type="number"
            onChange={(e) =>
              setEditRoutineActivityInfo({
                ...editRoutineActivityInfo,
                count: e.target.value,
              })
            }
            value={editRoutineActivityInfo.count}
            required
          />
          <br />
          <label htmlFor="duration2"> Duration: </label>
          <input
            id="duration2"
            type="number"
            onChange={(e) =>
              setEditRoutineActivityInfo({
                ...editRoutineActivityInfo,
                duration: e.target.value,
              })
            }
            value={editRoutineActivityInfo.duration}
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

export default EditRoutineActivity;
