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
                </div>
                )
            }):null}
        </div>
  </div>
  );
};

export default Routines;