import React from 'react'
import { destroyRoutineActivity } from '../api-adapter'

const RoutineActivity = (props) => {
    const activity = props.activity
    const setEditRoutineActivityMenu = props.setEditRoutineActivityMenu


    async function deleteRoutineActivity() {
        const routineId = activity.routineActivityId
        const response = await destroyRoutineActivity(activity.routineActivityId)
        
    }
   
    async function openEditRoutineActivityMenu() {
        setEditRoutineActivityMenu(true);
      }
    

return (
    <>
     <li>
                  
                  {activity.name}
                  <span
                    alt="Edit Routine Activity Duration and Count"
                    onClick={openEditRoutineActivityMenu}
                    className="material-symbols-outlined"
                  >
                    edit
                  </span>
                  <span
                    alt="Delete Routine Activity"
                    onClick={deleteRoutineActivity}
                    className="material-symbols-outlined"
                  >
                    delete
                  </span>
                </li>
                <ul>
                  <li> Duration: {activity.duration} minutes</li>
                  <li> Count: {activity.count} repetitions</li>
                </ul>
    </>
)
}

export default RoutineActivity