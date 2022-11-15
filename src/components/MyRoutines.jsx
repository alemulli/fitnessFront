import React from "react";

const MyRoutines = (props) => {
  const allUserRoutines = props.allUserRoutines
  const setAllUserRoutines = props.setAllUserRoutines

  return (
    <div id="myRoutines">
        <h2>myRoutines</h2>
        <div className="myRoutines">
          {allUserRoutines ? allUserRoutines.map((routine, index) => {
            return (
              <div className="oneRoutine" key={index}>
                    <h2>{routine.name}</h2>
                    <p> Creator: {routine.creatorName} </p>
                    <p> Goals: {routine.goal} </p>
                    <p> Activities: </p>
                    <ul>
                        {routine.activities.map ((activity, index) => {
                            return (
                                <>
                                <li> {activity.name} </li>
                                <ul>
                                    <li> Duration: {activity.duration} minutes</li>
                                    <li> Count: {activity.count} repetitions</li>
                                </ul>
                                </>
                            )

                        })}
                    </ul>
                </div>
            )
          }):null}
        </div>
  </div>
  );
};

export default MyRoutines;