import React from "react";
import { createActivity } from "../api-adapter";

const CreateActivity = (props) => {
    const addActivityMenu = props.addActivityMenu
    const setAddActivityMenu = props.setAddActivityMenu
    const allActivities = props.allActivities
    const setAllActivities = props.setAllActivities
    const error = props.error
    const setError = props.setError

    async function closeAddActivityMenu () {
        setAddActivityMenu(false)
        setError(null)
    }

async function handleSubmit(event) {
    event.preventDefault()
    const name = event.target[0].value
    const description = event.target[1].value
    const response = await createActivity(name, description)
    if (response.name === 'activity already exists') {
        setError("The Activity already exists.")
    }
    else {
        setAllActivities([...allActivities,response])
        setAddActivityMenu(false)
    }

    event.target[0].value = ''
    event.target[1].value = '' 
}

    return(
        <div className={`${addActivityMenu}`} id="addActivityMenu">
        <div className="addActivityMenu">
        <span className="material-symbols-outlined" onClick={closeAddActivityMenu}>close</span>
        <form onSubmit={handleSubmit}>
            <h3>Add Activity</h3>
            <label htmlFor="name">Activity Name: </label>
            <input id="name" type="text" required />
            <br/>
            <label htmlFor="description">Activity Description: </label>
            <input id="description" type="text" required />
            {error ? (<small className="error">{error}</small>): null}
            
            <br/>
            <button className="submitButton" type="submit">SUBMIT</button>
        </form>
        </div>
        </div>
    )
}

export default CreateActivity