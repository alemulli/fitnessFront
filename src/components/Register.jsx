import React from "react";
import { register } from "../api-adapter";

const Register = (props) => {
    const registering = props.registering
    const setRegistering = props.setRegistering

    async function closeRegisterMenu () {
        setRegistering(false)
    }

    async function handleSubmit(event){
        console.log('I HIT SUBMIT')
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