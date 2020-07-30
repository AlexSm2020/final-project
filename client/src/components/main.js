import React from 'react';
import { Switch, Route} from 'react-router-dom';

import LandingPage from './landingpage';
import About from './about';
import Contact from './contact';
import LogIn from './logIn';
import Register from './register';
import Search from './search';
import UserForm from './userForm'
import Applications from './applications';
import SingleApplication from './singleApplication';
import PrivateRoute from "./privateRoute";

function Main(props) {
  return (
    <Switch>
    <Route exact path="/" component={props.loggedIn === false ? LandingPage : Search} />
    <Route exact path="/about" component={About} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/login" component={LogIn} />
    <Route exact path="/register" component={Register} />
    <PrivateRoute exact path="/search" component={Search} />
    <PrivateRoute exact path="/userForm" component={UserForm} />
    <PrivateRoute exact path="/applications" component={Applications} />
    <PrivateRoute exact path="/singleApplication" component={SingleApplication} />
  </Switch>

  )
}




export default Main;