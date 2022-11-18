import React from "react";

//component renders all activities in the db, there is a button that opens a menu to add a new activity

const Activities = (props) => {
  const allActivities = props.allActivities;
  const setAddActivityMenu = props.setAddActivityMenu;

  async function openAddActivityMenu() {
    setAddActivityMenu(true);
  }

  return (
    <div id="Activities">
      <h2>Activities</h2>
      {localStorage.getItem("token") ? (
        <>
          <span
            className="material-symbols-outlined"
            onClick={openAddActivityMenu}
            alt="Add a New Activity"
          >
            add_circle
          </span>
          <span> Add a New Activity </span>
        </>
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
    </div>
  );
};

export default Activities;
