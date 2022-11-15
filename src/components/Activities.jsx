import React from "react";

const Activities = (props) => {
  const allActivities = props.allActivities;
  const setAddActivityMenu = props.setAddActivityMenu;

  async function openAddActivityMenu() {
    setAddActivityMenu(true);
  }

  return (
    <div id="Activities">
      <h2>I am activities</h2>
      <span className="material-symbols-outlined" onClick={openAddActivityMenu}>
        add_circle
      </span>
      <span> Add a New Activity </span>
      <div className="allActivities">
        {allActivities
          ? allActivities.map((activity, index) => {
              return (
                <div className="oneActivity" key={index}>
                  <h2> {activity.name} </h2>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Activities;
