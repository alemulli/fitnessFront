import React, { useState } from "react";
import { login } from "../api-adapter";

const Login = (props) => {
    const loggingIn = props.loggingIn
    const setLoggingIn = props.setLoggingIn
    const setLoggedIn = props.setLoggedIn
    const error = props.error
    const setError = props.setError

    const [loginInfo, setLoginInfo]=useState({
        username: "",
        password: ""
    })

    async function closeLoginMenu () {
        setLoggingIn(false)
        setError(null)
    }

    async function handleSubmit(event){
        event.preventDefault();
        const username = loginInfo.username;
        const password = loginInfo.password;
        const response = await login(username, password)

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
        setLoginInfo({
            username: "",
            password: ""
        })  
    }

    return(
        <div className={`${loggingIn}`} id="loginMenu">
        <div className="loginMenu">
        <span className="material-symbols-outlined" onClick={closeLoginMenu} alt="Close Menu">close</span>
        <form onSubmit={handleSubmit}>
            <h3>Login</h3>
            <label htmlFor="username">Username: </label>
            <input id="username" type="text" onChange={(e)=> setLoginInfo({...loginInfo, username: e.target.value})} value={loginInfo.username} required />
            <br/>
            <label htmlFor="password">Password: </label>
            <input id="password" type="password" onChange={(e)=> setLoginInfo({...loginInfo, password: e.target.value})} value={loginInfo.password} required />
            {error ? (<small className="error">{error}</small>): null}
            
            <br/>
            <button className="submitButton" type="submit">SUBMIT</button>
        </form>
        </div>
        </div>
    )
}

export default Login