import React, {useState, useEffect} from "react";
import { userRoutines } from "../api-adapter";

//child component of SingleRoutine that renders out each individual routines, contains buttons that allows you to edit the duration and count or delete a routine activity

const UsersRoutines = (props) => {
    const specificUser = props.specificUser
    const [thisUsersRoutines, setThisUsersRoutines] = useState([])

    useEffect(() => {
        const fetchData = async () => {
          const data = await userRoutines(specificUser);
    
          setThisUsersRoutines(data);
        };
        fetchData();
      }, []);

  return (
    <div id="usersRoutines">
     <h2 className="pageName">{specificUser}'s Routines</h2>
     <div className="allRoutines">
     {thisUsersRoutines
          ? thisUsersRoutines.map((routine, index) => {
              if (routine.isPublic) {
                return (
                  <div className="oneRoutine" key={routine.id}>
                    <h2>{routine.name}</h2>
                    <p> Goals: {routine.goal} </p>
                    <p> Activities: </p>
                    <ul>
                      {routine.activities.map((activity, index) => {
                        return (
                          <div
                            className="oneRoutineActivity"
                            key={activity.routineActivityId}
                          >
                            <li> {activity.name} </li>
                            <ul>
                              <li> Duration: {activity.duration} minutes</li>
                              <li> Count: {activity.count} repetitions</li>
                            </ul>
                          </div>
                        );
                      })}
                    </ul>
                  </div>
                );
              }
            })
          : null}
          </div>
    </div>
  );
};

export default UsersRoutines;
