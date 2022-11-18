import React from "react";
import { NavLink } from "react-router-dom";

//component renders all routines in the db

const Routines = (props) => {
  const allRoutines = props.allRoutines;
  const setSpecificUser = props.setSpecificUser

  return (
    <div id="Routines">
      <h2 className="pageName"> Routines</h2>
      <div className="allRoutines">
        {allRoutines
          ? allRoutines.map((routine, index) => {
              if (routine.isPublic) {
                return (
                  <div className="oneRoutine" key={routine.id}>
                    <h2>{routine.name}</h2>
                    <p> Creator: <NavLink to='/UsersRoutines' onClick={(function(){setSpecificUser(routine.creatorName)})}>{routine.creatorName}</NavLink> </p>
                    <p> Goals: {routine.goal} </p>
                    <p> Activities: </p>
                    <ul>
                      {routine.activities.map((activity, index) => {
                        return (
                          <div
                            className="oneRoutineActivity"
                            key={activity.routineActivityId}
                          >
                            <li> {activity.name} </li>
                            <ul>
                              <li> Duration: {activity.duration} minutes</li>
                              <li> Count: {activity.count} repetitions</li>
                            </ul>
                          </div>
                        );
                      })}
                    </ul>
                  </div>
                );
              }
            })
          : null}
      </div>
    </div>
  );
};

export default Routines;
