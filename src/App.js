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
import notebook from './assets/notebook.svg';
//Components/Pages
import { slide as Menu } from 'react-burger-menu';
import TutorialModal from './components/TutorialModal';
import Dashboard from './pages/Dashboard';
import Data from './pages/Data';

import {Nav, Navbar, NavDropdown, ListGroup, Button} from 'react-bootstrap';
import Header from './components/Header';
import GlossaryModal from './components/GlossaryModal';
import FAQ from './pages/FAQ';

class App extends Component {
  render() {
    return (
      <div className="siteWrapper" id="outer-container">
        <Menu customBurgerIcon={<div><img src={notebook} alt="Field Guide"/> Field Guide</div>} right>
        <ListGroup variant="flush">
          <ListGroup.Item><TutorialModal/></ListGroup.Item>
          <ListGroup.Item><GlossaryModal/></ListGroup.Item>
          <ListGroup.Item><Button variant="link" href="/faq">FAQ</Button></ListGroup.Item>
        </ListGroup>
      </Menu>
        <main id="page-wrap">
          <Header/>
          {/* Routing for the pages */}
          <Router>
            <Switch>
              {/* Homepage route  */}
              <Route exact path="/" component={Dashboard}/ > 
              {/* Dashboard route */}
              <Route exact path="/data" component={Data}/>  
              {/* Dashboard route */}
              <Route exact path="/faq" component={FAQ}/>
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