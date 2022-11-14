// all API fetch requests go here

// const BASE_URL = "https://shielded-fjord-88557.herokuapp.com";
const BASE_URL = "http://localhost:8080"

//login

//register

//get all public routines

export async function getRoutines() {
    try {
       const response = await fetch (`${BASE_URL}/api/routines`)
       const result = await response.json()
       return result

    } catch (error) {
        console.error(error)
    }
}