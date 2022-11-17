import React, { useState } from "react";
import { register } from "../api-adapter";

const Register = (props) => {
  const registering = props.registering;
  const setRegistering = props.setRegistering;
  const setLoggedIn = props.setLoggedIn;
  const error = props.error;
  const setError = props.setError;

  const [registerInfo, setRegisterInfo] = useState({
    username: "",
    password: "",
  });

  async function closeRegisterMenu() {
    setRegistering(false);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const username = registerInfo.username;
    const password = registerInfo.password;

    if (password.length <= 8) {
      setError("Password must be more than 8 characters long.");
    } else {
        const response = await register(username, password);
        console.log(username, "username", password, "password");
        console.log(response, "this is the response");
        localStorage.removeItem("token");
        if (response && response.token) {
          localStorage.setItem("token", response.token);
          setLoggedIn(response.token);
          setRegistering(false);
          setError(null);
        } else {
          setLoggedIn(false);
          setError("User already exists.");
        }
      }
    

    setRegisterInfo({
      username: "",
      password: "",
    });

  }

  return (
    <div className={`${registering}`} id="registerMenu">
      <div className="registerMenu">
        <span className="material-symbols-outlined" onClick={closeRegisterMenu} alt="Close Menu">
          close
        </span>
        <form onSubmit={handleSubmit}>
          <h3>Register</h3>
          <label htmlFor="username1">Username: </label>
          <input
            id="username1"
            type="text"
            onChange={(e) =>
              setRegisterInfo({ ...registerInfo, username: e.target.value })
            }
            value={registerInfo.username}
            required
          />
          <br />
          <label htmlFor="password2">Password: </label>
          <input
            id="password2"
            type="password"
            onChange={(e) =>
              setRegisterInfo({ ...registerInfo, password: e.target.value })
            }
            value={registerInfo.password}
            required
          />
          <br />
          {error ? (<small className="error">{error}</small>): null}
          <button className="submitButton" type="submit">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
