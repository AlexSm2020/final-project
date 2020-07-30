import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom'

class Landing extends React.Component {

  render() {

    return (
      <div className="container" id="landing-container">
          <h1>DreamJob.</h1>
          <h2>Job Search Platform</h2>
          <img src="logo.svg" id="landing-logo" alt="logo"></img>
          <h3>Your Career Upgrade Starts Here.</h3>
          <Link to="/register"><Button>Register</Button></Link>
          <Link to="/login">Already a member? Click to log in.</Link>
      </div>
    );
  }
}


export default Landing;