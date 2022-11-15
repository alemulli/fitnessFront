import React from "react";


const Routines = (props) => {
    const allRoutines = props.allRoutines

  return (
    <div id="Routines">
        <h2> Routines</h2>
        <div className="allRoutines">
            {allRoutines ? allRoutines.map((routine, index)=>{
                return(
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

export default Routines;