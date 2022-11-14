import React from "react";
import { login } from "../api-adapter";

const Login = (props) => {
    const loggingIn = props.loggingIn
    const setLoggingIn = props.setLoggingIn

    async function closeLoginMenu () {
        setLoggingIn(false)
    }

    async function handleSubmit(event){
        console.log('I HIT SUBMIT')
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
            <br/>
            <button className="submitButton" type="submit">SUBMIT</button>
        </form>
        </div>
        </div>
    )
}

export default Login