import React from "react";
import { login } from "../api-adapter";

const Login = (props) => {
    const loggingIn = props.loggingIn
    const setLoggingIn = props.setLoggingIn
    const setLoggedIn = props.setLoggedIn
    const error = props.error
    const setError = props.setError

    async function closeLoginMenu () {
        setLoggingIn(false)
        setError(null)
    }

    async function handleSubmit(event){
        event.preventDefault();
        const username = event.target[0].value;
        const password = event.target[1].value;
        const response = await login(username, password)
        // console.log(username, "username", password, "password")
        // console.log(response, "this is the response")
        localStorage.removeItem("token");
        if (response && response.token) {
            localStorage.setItem("token", response.token);
            setLoggedIn(response.token)
            setLoggingIn(false)
            setError(null)

        } else {
            setLoggedIn(false)
            setError("Username doesn't exist or username and password don't match.")

        }
    //resetting the login form inputs
        event.target[0].value = ''
        event.target[1].value = ''  
    }

    return(
        <div className={`${loggingIn}`} id="loginMenu">
        <div className="loginMenu">
        <span className="material-symbols-outlined" onClick={closeLoginMenu}>close</span>
        <form onSubmit={handleSubmit}>
            <h3>Login</h3>
            <label htmlFor="username">Username: </label>
            <input id="username" type="text" required />
            <br/>
            <label htmlFor="password">Password: </label>
            <input id="password" type="password" required />
            {error ? (<small className="error">{error}</small>): null}
            
            <br/>
            <button className="submitButton" type="submit">SUBMIT</button>
        </form>
        </div>
        </div>
    )
}

export default Login