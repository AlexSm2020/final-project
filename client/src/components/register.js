import React, { Component } from 'react';
// import { Grid, Cell } from 'react-mdl';
import logo from "../logo.svg"
import axios from 'axios';

class Register extends Component {

  // Using constructor to build out Register component class which will be exported to app.js for rendering.

  constructor(props) {
    super(props)
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      redirectTo: ""
    }
    // Binding functions to class in ordere to be able to use functions in JSX below.
    this.resetUserInputs = this.resetUserInputs.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  // Function designed to set state inputs back to empty after submitting form.

  resetUserInputs = () => {
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      redirecTo: ""
    });
  };

  // Function to edit state values upon input change
  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  // This function will take in the inputs and submit the registration form to our database to store the user. 
  handleFormSubmit = event => {
    event.preventDefault()

    const payload = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      username: this.state.email,
      password: this.state.password
    }

    // Using an axios call to hit our Express route for registering user in our database.
    axios.post("user/signup", payload)
      .then( function (response) {
        // If we get back a response from our database, we determine this to be successful and can redirect the user to the home screen.
        if (response.data.redirect) {
          console.log("successful signup")
          window.location = "/"
        } else {
          console.log("Sign-up error");
        }
      })
      // If we get a server error, alert user of error.
      .catch(err => {
        console.log("Sign up server error: ")
        console.log(err);
      })
  }
  
  // Below is the JSX code to render in app.js. A simple form for registering the user.
  render() {
    return (
      <div className="container h-100">
        <div className= "d-flex justify-content-center h-100">
          <div className="user_card_signup">
            <div className="d-flex justify-content-center">
              <div className="brand_logo_container_signup">
                <img src={logo} className="brand_logo_signup" alt="logo"></img>
              </div>
            </div>
            <div className="d-flex justify-content-center form_container_signup">
              <form className="signup">
                <div className="form-group">
                  <label>First Name</label>
                  <input
                  value={this.state.firstName}
                  name="firstName"
                  onChange={this.handleInputChange}
                  type="text" 
                  className="form-control" 
                  placeholder="First Name">

                  </input>
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input
                  value={this.state.lastName} 
                  name="lastName"
                  onChange={this.handleInputChange}
                  type="text" 
                  className="form-control" 
                  placeholder="Last Name">

                  </input>
                </div>
                <div className="form-group">
                  <label>Email Address (Username)</label>
                  <input 
                  value={this.state.email}
                  name="email"
                  onChange={this.handleInputChange}
                  type="email" 
                  className="form-control input_user" 
                  placeholder="Email">

                  </input>
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                  value={this.state.password} 
                  name="password"
                  onChange={this.handleInputChange}
                  type="password" 
                  className="form-control input_pass" 
                  placeholder="Password">

                  </input>
                </div>
                <button onClick={this.handleFormSubmit} className="btn btn-primary signup_btn">Sign Up</button>
              </form>
            </div>
            <div className="mt-4">
              <div className="d-flex justify-content-center links">
               <a href="/login" className="ml-2">Have an account?</a>
              </div>
            </div>

          </div>
        </div>

      </div>
    )
  }
}

export default Register;