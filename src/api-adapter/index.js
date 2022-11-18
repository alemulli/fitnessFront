// all API fetch requests go here

// const BASE_URL = "https://shielded-fjord-88557.herokuapp.com";
const BASE_URL = "http://localhost:8080";

//login
export async function login(username, password) {
  try {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    };
    const response = await fetch(`${BASE_URL}/api/users/login`, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

//register
export async function register(username, password) {
  try {
    const options = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    };
    const response = await fetch(`${BASE_URL}/api/users/register`, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

//get all routines (public and private)

export async function getRoutines() {
  try {
    const response = await fetch(`${BASE_URL}/api/routines`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

//get all activities
export async function getActivities() {
  try {
    const response = await fetch(`${BASE_URL}/api/activities`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

//post new activity
export async function createActivity(name, description) {
  try {
    const options = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        name,
        description,
      }),
    };
    const response = await fetch(`${BASE_URL}/api/activities/`, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

//get all users routines (public, and private if token)
export async function userRoutines(username) {
  try {
    const options = {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    const response = await fetch(
      `${BASE_URL}/api/users/${username}/routines`,
      options
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

//get user info
export async function userInfo() {
  try {
    const options = {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    const response = await fetch(`${BASE_URL}/api/users/me`, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

//post new routine
export async function createRoutine(creatorId, isPublic, name, goal) {
  try {
    const options = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        creatorId,
        isPublic,
        name,
        goal,
      }),
    };
    const response = await fetch(`${BASE_URL}/api/routines/`, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

//post: add an activity to a routine
export async function addActivityToRoutine(
  routineId,
  activityId,
  count,
  duration
) {
  try {
    const options = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        routineId,
        activityId,
        count,
        duration,
      }),
    };
    const response = await fetch(
      `${BASE_URL}/api/routines/${routineId}/activities`,
      options
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

//delete an activity from a routine
export async function destroyRoutineActivity(routineActivityId) {
  try {
    const options = {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    const response = await fetch(
      `${BASE_URL}/api/routine_activities/${routineActivityId}`,
      options
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

//delete a routine
export async function destroyRoutine(id) {
  try {
    const options = {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    const response = await fetch(`${BASE_URL}/api/routines/${id}`, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

//edit a routine
export async function editRoutine(id, isPublic, name, goal) {
  try {
    const options = {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        isPublic,
        name,
        goal,
      }),
    };
    const response = await fetch(`${BASE_URL}/api/routines/${id}`, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

//edit a routine activity
export async function editRoutineActivity(id, count, duration) {
  try {
    const options = {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify ({
        count,
        duration,
      }),
    };
    const response = await fetch(
      `${BASE_URL}/api/routine_activities/${id}`,
      options
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}
