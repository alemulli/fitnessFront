import React from "react";
import fitimages from "./fitimages.jpg"

//home page that we want to have a description of the project and our goals and explanations of what we did

const Home = (props) => {
  const currentUser = props.currentUser
  const loggedIn = props.loggedIn

    return (
      <div id="home">
        {loggedIn ? <h2> Hello {currentUser.username}! Let's get swole!</h2>: <h2>Hello! Please login or make an account with us to get yoked!</h2>}
      <p>
        <b>Welcome to Fitness Trackr!</b>
      </p>
      <p>Fitness Trackr is a website where you can share exercise activities and build exercise routines to fit your goals!</p> 
      <p>This web app was developed using express.js, postgreSQL for the database, and react.js.</p>
      <p>Please enjoy!</p>
      <div id="bar">
      <img src={fitimages} className="homepic" alt="woman holds barbell"/></div>
      </div>
    )
  }
;

export default Home;
