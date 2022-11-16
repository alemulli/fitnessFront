import React from "react";

const MyRoutines = (props) => {
  const allUserRoutines = props.allUserRoutines
  const setAllUserRoutines = props.setAllUserRoutines
  const setAddRoutineMenu = props.setAddRoutineMenu;

  async function openAddRoutineMenu() {
    setAddActivityMenu(true);
  }

  return (
    <div id="myRoutines">
        <h2>myRoutines</h2>
        {localStorage.getItem("token") ? (
        <>
          <span
            className="material-symbols-outlined"
            onClick={openAddRoutineMenu}
          >
            add_circle
          </span>
          <span> Add a New Routine </span>
        </>
      ) : null}
        <div className="myRoutines">
          {allUserRoutines.length ? allUserRoutines.map((routine, index) => {
            return (
              <div className="oneRoutine" key={routine.id}>
                    <h2>{routine.name}</h2>
                    <p> <span>Available Publicly?: </span>
                    {routine.isPublic ? (<span>Yes</span>) :(<span>No</span>)} </p>
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