import React from "react";

const Activities = (props) => {
  const allActivities = props.allActivities;

  return (
    <div id="Activities">
      <h2>I am activities</h2>
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
