import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
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
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">JobSearchApp</Link>}>
            <Navigation>
              <Link to="/register">Register Today</Link>
              <Link to="/about">About Us</Link>
              <Link to="/login">Log In</Link>
              <Link to="/contact">Contact Us</Link>
              <Link to="/search">Search</Link>
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