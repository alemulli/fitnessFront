import React, { useState } from "react";
import { createRoutine } from "../api-adapter";

const CreateRoutine = (props) => {
    const addRoutineMenu = props.addRoutineMenu
    const setAddRoutineMenu = props.setAddRoutineMenu
    const allRoutines = props.allRoutines
    const setAllRoutines = props.setAllRoutines
    const currentUser = props.currentUser
    //may also need to pass down user routines and set user routines

    const [routineInfo, setRoutineInfo] = useState({
        isPublic: false,
        name: "",
        goal: ""
    })

    async function closeAddRoutineMenu () {
        setAddRoutineMenu(false)
    }

    async function handleSubmit(event) {
        event.preventDefault()
        const name = routineInfo.name
        const goal = routineInfo.goal
        const isPublic = routineInfo.isPublic
        const creatorId = currentUser.id
        const response = await createRoutine(creatorId, isPublic, name, goal)

        setAllRoutines([...allRoutines,response])
        setAddRoutineMenu(false)
     

    setRoutineInfo({
        isPublic: false,
        name: "",
        goal: ""
    })
   }


    return(
        <div className={`${addRoutineMenu}`} id="addRoutineMenu">
        <div className="addRoutineMenu">
        <span className="material-symbols-outlined" onClick={closeAddRoutineMenu}>close</span>
        <form onSubmit={handleSubmit}>
            <h3>Add Routine</h3>
            <label htmlFor="name1">Routine Name: </label>
            <input id="name1" type="text" onChange={(e)=> setRoutineInfo({...routineInfo, name: e.target.value})} value={routineInfo.name} required />
            <br/>
            <label htmlFor="goal">Routine Goal: </label>
            <input id="goal" type="text" onChange={(e)=> setRoutineInfo({...routineInfo, description: e.target.value})} value={routineInfo.description} required />
            <br/>
            <label htmlFor="isPublic">Publicly available? </label>
            <input id="isPublic" type="checkbox" onChange={(e)=> setRoutineInfo({...routineInfo, isPublic: e.target.value})} value={routineInfo.isPublic}/>
            <br/>
            <button className="submitButton" type="submit">SUBMIT</button>
        </form>
        </div>
        </div>
    )
}

export default CreateRoutine