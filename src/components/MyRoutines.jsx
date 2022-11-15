import React from "react";

const MyRoutines = (props) => {
  const allUserRoutines = props.allUserRoutines
  const setAllUserRoutines = props.setAllUserRoutines

  return (
    <div id="myRoutines">
        <h2>myRoutines</h2>
        <div className="myRoutines">
          {allUserRoutines.length ? allUserRoutines.map((routine, index) => {
            return (
              <div className="oneRoutine" key={routine.id}>
                    <h2>{routine.name}</h2>
                    <p> Creator: {routine.creatorName} </p>
                    <p> Goals: {routine.goal} </p>
                    <p> Activities: </p>
                    <ul>
                        {routine.activities.map ((activity, index) => {
                            return (
                                <div className="oneRoutineActivity" key={activity.routineActivityId}>
                                <li> {activity.name} </li>
                                <ul>
                                    <li> Duration: {activity.duration} minutes</li>
                                    <li> Count: {activity.count} repetitions</li>
                                </ul>
                                </div>
                            )

                        })}
                    </ul>
                </div>
            )
          }):(<p>You have no routines yet!</p>)}
        </div>
  </div>
  );
};

export default MyRoutines;