import React from "react";

const MyRoutines = (props) => {
  const allUserRoutines = props.allUserRoutines;
  const setAddRoutineMenu = props.setAddRoutineMenu;
  const setAddActivityToRoutineMenu = props.setAddActivityToRoutineMenu;
  const setEditRoutineMenu = props.setEditRoutineMenu
  const setEditRoutineActivityMenu= props.setEditRoutineActivityMenu;

  async function openAddRoutineMenu() {
    setAddRoutineMenu(true);
  }

  async function openAddActivityToRoutineMenu() {
    setAddActivityToRoutineMenu(true);
  }

  async function openEditRoutineMenu () {
    setEditRoutineMenu(true)
  }

  async function openEditRoutineActivityMenu () {
    setEditRoutineActivityMenu(true)
  }

  async function deleteRoutine () {
    console.log("hey, you didn't delete it yet because we haven't written the function")
  }

  async function deleteRoutineActivity () {
    console.log("all you have done is pressed a button")
  }

  return (
    <div id="myRoutines">
      <h2>myRoutines</h2>
      {localStorage.getItem("token") ? (
        <>
          <span
            className="material-symbols-outlined"
            onClick={openAddRoutineMenu}
            alt="Add a New Routine"
          >
            add_circle
          </span>
          <span> Add a New Routine </span>
        </>
      ) : null}
      <div className="myRoutines">
        {allUserRoutines && allUserRoutines.length ? (
          allUserRoutines.map((routine, index) => {
            return (
              <div className="oneRoutine" key={routine.id}>
                <h2>{routine.name} <span alt="Edit Routine" onClick={openEditRoutineMenu} className="material-symbols-outlined">
edit
</span><span alt="Delete Routine" onClick={deleteRoutine} className="material-symbols-outlined">
delete
</span></h2> 
                <p>
                  {" "}
                  <span>Available Publicly?: </span>
                  {routine.isPublic ? <span>Yes</span> : <span>No</span>}{" "}
                </p>
                <p> Goals: {routine.goal} </p>
                <p> Activities: </p>
                <ul>
                  {routine && routine.activities
                    ? routine.activities.map((activity, index) => {
                        return (
                          <div
                            className="oneRoutineActivity"
                            key={activity.routineActivityId}
                          >
                            <li> {activity.name} <span alt="Edit Routine Activity Duration and Count" onClick={openEditRoutineActivityMenu} className="material-symbols-outlined">
edit
</span><span alt="Delete Routine Activity" onClick={deleteRoutineActivity} className="material-symbols-outlined">
delete
</span></li>
                            <ul>
                              <li> Duration: {activity.duration} minutes</li>
                              <li> Count: {activity.count} repetitions</li>
                            </ul>
                          </div>
                        );
                      })
                    : null}
                  <li id="addActivityToRoutine">
                    <span className="material-symbols-outlined" onClick={openAddActivityToRoutineMenu} alt="Add and Activity to the Routine">
                      add_circle
                    </span>
                    <span>Add an Activity to the Routine</span>
                  </li>
                </ul>
              </div>
            );
          })
        ) : (
          <p>You have no routines yet!</p>
        )}
      </div>
    </div>
  );
};

export default MyRoutines;
