import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import axios from "axios"
import {Link} from 'react-router-dom';

class App extends Component {
  state = {
    loggedIn: false,
    username: "",
    redirect: false,
    redirectTo: null,
    component: null
  }

 updateUser = (userObject) => {
  this.setState(userObject)
}

componentDidMount(){
  axios.get("/user")
    .then((response, error) => {
      if (error) {
        console.log(error.message)
      }
      this.setState({
        loggedIn: true,
        username: response.data.username,
        firstName: response.data.firstName,
        lastName: response.data.lastName
      })
    })
}

logout = () => {
  axios.get("user/logout")
  .then((response, error) => {
    if (error) {
      console.log(error.message)
    }
    else {
      console.log(response)
      this.setState({
        loggedIn: false,
        firstName: "",
        lastName: "",
        username: ""
      })
    }
  })
}

  render() {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">JobSearchApp</Link>} scroll>
            <Navigation>
                <Link to="/register">Register Today</Link>
                <Link to="/about">About Us</Link>
                <Link to="/login">Log In</Link>
                <Link to="/contact">Contact Us</Link>
                <Link to="/search">Search</Link>
                <Link to="/userForm">My form</Link>
                <Link to ="/applications">My Applications</Link>
                <Link to="/singleApplication">Single Application</Link>
                <Link to="/login" onClick={this.logout}>Logout</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">JobSearchApp</Link>}>
            <Navigation>
              <Link to="/register">Register Today</Link>
              <Link to="/about">About Us</Link>
              <Link to="/login">Log In</Link>
              <Link to="/contact">Contact Us</Link>
              <Link to="/search">Search</Link>
              <Link to="/applications">My Applications</Link>
              <Link to ="/singleApplication">Single Application</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main redirect={this.state.redirect} redirectTo={this.state.redirectTo} component={this.state.component} updateUser={this.updateUser} />
        </Content>
    </Layout>
</div>

    );
  }
}

export default App;