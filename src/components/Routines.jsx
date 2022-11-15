import React from "react";


const Routines = (props) => {
    const allRoutines = props.allRoutines

  return (
    <div id="Routines">
        <h2>I am Routines</h2>
        <div className="allRoutines">
            {allRoutines ? allRoutines.map((routine, index)=>{
                return(
                <div className="oneRoutine" key={index}>
                    <h2>{routine.name}</h2>
                    <p> Creator: {routine.creatorName} </p>
                    <p> Goals: {routine.goal} </p>
                    <ul> Activities: 
                        {allRoutines && allRoutines.activities ? allRoutines.activities.map((activity, index) => {
                            return (
                                <>
                                <li> {activity.name} </li>
                                <li> hello </li>
                                </>
                            )

                        }):null}
                    </ul>
                </div>
                )
            }):null}
        </div>
  </div>
  );
};

export default Routines;