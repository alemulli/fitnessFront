import React, { useState } from "react";
import { CreateActivity } from "./";

//component renders all activities in the db, there is a button that opens a menu to add a new activity

const Activities = (props) => {
  const allActivities = props.allActivities;
  const error = props.error;
  const setError = props.setError;
  const setAllActivities = props.setAllActivities;

  const [addActivityMenu, setAddActivityMenu] = useState(false);

  async function openAddActivityMenu() {
    setAddActivityMenu(true);
  }

  return (
    <div id="Activities">
      <h2 className="pageName">Activities</h2>
      {localStorage.getItem("token") ? (
        <div className="addingButton">
          <span
            className="material-symbols-outlined"
            onClick={openAddActivityMenu}
            alt="Add a New Activity"
          >
            add_circle
          </span>
          <span> Add a New Activity </span>
        </div>
      ) : null}

      <div className="allActivities">
        {allActivities
          ? allActivities.map((activity, index) => {
              return (
                <div className="oneActivity" key={activity.id}>
                  <h2> {activity.name} </h2>
                  <p> {activity.description} </p>
                </div>
              );
            })
          : null}
      </div>
      <CreateActivity
        addActivityMenu={addActivityMenu}
        setAddActivityMenu={setAddActivityMenu}
        error={error}
        setError={setError}
        allActivities={allActivities}
        setAllActivities={setAllActivities}
      />
    </div>
  );
};

export default Activities;
