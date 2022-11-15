import React from "react";
import { register } from "../api-adapter";

const Register = (props) => {
    const registering = props.registering
    const setRegistering = props.setRegistering
    const setLoggedIn = props.setLoggedIn
    const error = props.error 
    const setError = props.setError

    async function closeRegisterMenu () {
        setRegistering(false)
    }

    async function handleSubmit(event){
        event.preventDefault()
        const username = event.target[0].value
        const password = event.target[1].value
        const response = await register(username, password)
        console.log(username, "username", password, "password")
        console.log(response, "this is the response")
        localStorage.removeItem("token")
        if (response && response.token) {
            localStorage.setItem("token", response.token)
            setLoggedIn(response.token)
            setRegistering(false)
        } else {
            setLoggedIn(false)
            setError("User already exists")
        }
        event.target[0].value = ''
        event.target[1].value = '' 
    }

    return(
        <div className={`${registering}`} id="registerMenu">
        <div className="registerMenu">
        <span className="material-symbols-outlined" onClick={closeRegisterMenu}>close</span>
        <form onSubmit={handleSubmit}>
            <h3>Register</h3>
            <label htmlFor="username1">Username: </label>
            <input id="username1" type="text" required />
            <br/>
            <label htmlFor="password2">Password: </label>
            <input id="password2" type="password" required />
            <br/>
            <label htmlFor="confirmPassword">Confirm Password: </label>
            <input id="confirmPassword" type="password" required />
            <br/>
            <button className="submitButton" type="submit">SUBMIT</button>
        </form>
        </div>
        </div>
    )
}

export default Register