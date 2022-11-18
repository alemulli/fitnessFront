import React, { useState } from "react";
import { createActivity } from "../api-adapter";

//Menu that allows you to create a new activity

const CreateActivity = (props) => {
  const addActivityMenu = props.addActivityMenu;
  const setAddActivityMenu = props.setAddActivityMenu;
  const allActivities = props.allActivities;
  const setAllActivities = props.setAllActivities;
  const error = props.error;
  const setError = props.setError;

  const [activityInfo, setActivityInfo] = useState({
    name: "",
    description: "",
  });

  async function closeAddActivityMenu() {
    setAddActivityMenu(false);
    setError(null);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const name = activityInfo.name;
    const description = activityInfo.description;
    const response = await createActivity(name, description);
    if (response.name === "activity already exists") {
      setError("The Activity already exists.");
    } else {
      setAllActivities([...allActivities, response]);
      setAddActivityMenu(false);
    }

    setActivityInfo({ name: "", description: "" });
  }

  return (
    <div className={`${addActivityMenu}`} id="addActivityMenu">
      <div className="addActivityMenu">
        <span
          className="material-symbols-outlined"
          onClick={closeAddActivityMenu}
          alt="Close Menu"
        >
          close
        </span>
        <form onSubmit={handleSubmit}>
          <h3>Add Activity</h3>
          <label htmlFor="name">Activity Name: </label>
          <input
            id="name"
            type="text"
            onChange={(e) =>
              setActivityInfo({ ...activityInfo, name: e.target.value })
            }
            value={activityInfo.name}
            required
          />
          <br />
          <label htmlFor="description">Activity Description: </label>
          <input
            id="description"
            type="text"
            onChange={(e) =>
              setActivityInfo({ ...activityInfo, description: e.target.value })
            }
            value={activityInfo.description}
            required
          />
          {error ? <small className="error">{error}</small> : null}

          <br />
          <button className="submitButton" type="submit">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateActivity;
