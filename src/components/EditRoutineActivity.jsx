import React, {useState} from "react";
//import API PATCH request for routine activity

const EditRoutineActivity = (props) => {
    const editRoutineActivityMenu = props.editRoutineActivityMenu
    const setEditRoutineActivityMenu = props.setEditRoutineActivityMenu;
    //props for updating allUserRoutines?
    //props for errors?

//the initial states will probably change to a literal of what the value is of the routine we are trying to edit is before we edit them
    const [editRoutineActivityInfo, setEditRoutineActivityInfo] = useState({
        duration:"",
        count: ""
    })

    async function closeEditRoutineActivityMenu () {
        setEditRoutineActivityMenu(false)
        //setError(null)? if we need errors on this one
    }

    async function handleSubmit(event) {
        console.log("this is a placeholder")
    }

    return(
        <div className={`${editRoutineActivityMenu}`} id="editRoutineActivityMenu">
            <div className="editMenu">
            <span className="material-symbols-outlined" onClick={closeEditRoutineActivityMenu} alt="Close Menu">close</span>
            <form onSubmit={handleSubmit}>
          <h3>Edit Activity</h3>
          <label htmlFor="count1">Count: </label>
          <input
            id="count1"
            type="number"
            onChange={(e) =>
                setEditRoutineActivityInfo({ ...editRoutineActivityInfo, count: e.target.value })
            }
            value={editRoutineActivityInfo.count}
            required
          />
          <br />
          <label htmlFor="duration2"> Duration: </label>
          <input
            id="duration2"
            type="number"
            onChange={(e) =>
                setEditRoutineActivityInfo({ ...editRoutineActivityInfo, duration: e.target.value })
            }
            value={editRoutineActivityInfo.duration}
            required
          />
         
          <br />
          <button className="submitButton" type="submit">
            SUBMIT
          </button>
        </form>
            </div>
        </div>
    )

}

export default EditRoutineActivity