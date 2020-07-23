import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import About from './about';
import Contact from './contact';
import LogIn from './logIn';
import Register from './register';
import Search from './search';
import UserForm from './userForm'
import Applications from './applications';

const Main = (props) => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/members" component={LandingPage} />
    <Route exact path="/about" component={About} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/login" render= {() =>
      <LogIn updateUser={props.updateUser} />
    }/>
    <Route exact path="/register" component={Register} />
    <Route exact path="/search" component={Search} />
    <Route exact path="/userForm" component={UserForm} />
    <Route exact path="/applications" component={Applications} />
  </Switch>
)

export default Main;