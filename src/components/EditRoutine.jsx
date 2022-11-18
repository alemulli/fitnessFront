import React, { useState } from "react";
import { editRoutine } from "../api-adapter";

//Menu that allows you to edit a routine

const EditRoutine = (props) => {
  const editRoutineMenu = props.editRoutineMenu;
  const setEditRoutineMenu = props.setEditRoutineMenu;
  const routine = props.routine;
  const selectedRoutine = props.selectedRoutine
  //props for updating allRoutines?
  //props for updating allUserRoutines?
  //props for errors?

  //the initial states will probably change to a literal of what the value is of the routine we are trying to edit is before we edit them
  const [editRoutineInfo, setEditRoutineInfo] = useState({
    isPublic: routine.isPublic,
    name: routine.name,
    goal: routine.goal,
  });

  async function closeEditRoutineMenu() {
    setEditRoutineMenu(false);
    //setError(null)? if we need errors on this one
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const routineId = routine.id;
    console.log(editRoutineInfo, "this is the editRoutineInfo")
    const name = editRoutineInfo.name;
    const goal = editRoutineInfo.goal;
    const isPublic = editRoutineInfo.isPublic;
    const response = await editRoutine(routineId, isPublic, name, goal);

    setEditRoutineMenu(false);
  }

  return (
    <div className={`${editRoutineMenu}`} id="editRoutineMenu">
      <div className="editMenu">
        <span
          className="material-symbols-outlined"
          onClick={closeEditRoutineMenu}
          alt="Close Menu"
        >
          close
        </span>
        <form onSubmit={handleSubmit}>
          <h3>Edit Routine</h3>
          <label htmlFor="name2">Routine Name: </label>
          <input
            id="name2"
            type="text"
            onChange={(e) =>
              setEditRoutineInfo({ ...editRoutineInfo, name: e.target.value })
            }
            value={editRoutineInfo.name}
            required
          />
          <br />
          <label htmlFor="goal1">Routine Goal: </label>
          <input
            id="goal1"
            type="text"
            onChange={(e) =>
              setEditRoutineInfo({ ...editRoutineInfo, goal: e.target.value })
            }
            value={editRoutineInfo.goal}
            required
          />
          <br />
          <label htmlFor="isPublic2">Publicly available? </label>
          <input
            id="isPublic2"
            type="checkbox"
            checked={editRoutineInfo.isPublic}
            onChange={(e) =>
              setEditRoutineInfo({
                ...editRoutineInfo,
                isPublic: !editRoutineInfo.isPublic,
              })
            }
          />
          <br />
          <button className="submitButton" type="submit">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditRoutine;
