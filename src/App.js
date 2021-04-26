// import logo from './logo.svg';
import React, {Component} from 'react';
import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import PropTypes from 'prop-types';

//Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//Components/Pages
import { slide as Menu } from 'react-burger-menu';
import FAQModal from './components/FAQModal';
import Dashboard from './pages/Dashboard';
import Data from './pages/Data';

import {Nav, Navbar, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="siteWrapper" id="outer-container">
        <Menu right>
        <FAQModal/>
        <Button variant="link">Tutorial</Button>
        <Button variant="link">Glossary</Button>
      </Menu>
        <main id="page-wrap">
          <header>
            <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
              <Navbar.Brand href="/">
                <img src="http://eclipsesoundscapes.org/sites/all/themes/eclipsesoundscapes/assets/images/e-s-logo.png"
                  width="30"
                  alt="logo"
                />
                {" "}Eclipse Soundscapes
                </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <NavDropdown variant="dark" title="About Us" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/about">About the Projecrt</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Our Team</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Our Partners</NavDropdown.Item>
                </NavDropdown>
                  <Nav.Link href="/app">App</Nav.Link>
                <NavDropdown variant="dark" title="Citizen Science Project" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/project/faq">About + FAQ</NavDropdown.Item>
                  <NavDropdown.Item href="/project/eclipse">Eclipse Features</NavDropdown.Item>
                  <NavDropdown.Item href="/project/dashboard">Citizen Science Project</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/blog">Blog</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </header>
          {/* Routing for the pages */}
          <Router>
            <Switch>
              {/* Homepage route  */}
              <Route exact path="/" component={Dashboard}/ > 
                
              {/* Dashboard route */}
              <Route exact path="/data" component={Data}/>
            </Switch>
          </Router>
          </main>
        </div>
    );
  }
}

// App.propTypes = {
//   location: PropTypes.shape({
//     pathname: PropTypes.string.isRequired
//   })
// };
export default App;