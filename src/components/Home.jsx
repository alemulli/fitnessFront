import React from "react";
import fitimages from "./fitimages.jpg"

//home page that we want to have a description of the project and our goals and explanations of what we did

const Home = (props) => {
  const currentUser = props.currentUser
  const loggedIn = props.loggedIn

  if (loggedIn) {
    return (
      <div id="home">
      <h2> Hello {currentUser.username}! Let's get swole!</h2>
      <p>
        Welcome to Fitness Tracker!
      </p>
      <img src={fitimages} className="homepic" alt="woman holds barbell"/>
      </div>
    )
  }
  else {
  return (
    <div id="home">
      <h2>Hello! Please make an account with us to get yoked!</h2>
      <p>
        Welcome to Fitness Tracker!
      </p>
      <img src={fitimages} className="homepic" alt="woman holds barbell"/>
    </div>
  );}
};

export default Home;
