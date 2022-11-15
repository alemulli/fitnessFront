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

//get all public routines

export async function getRoutines() {
  try {
    const response = await fetch(`${BASE_URL}/api/routines`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function getActivities() {
  try {
    const response = await fetch(`${BASE_URL}/api/activities`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function createActivity(name, description) {
  try {
    const options = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`
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
