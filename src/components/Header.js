import React, {Component} from 'react';
import {Nav, Navbar, NavDropdown} from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
        <header>
        <Navbar expand="lg" fixed="top">
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
              <NavDropdown.Item href="#">About the Project</NavDropdown.Item>
              <NavDropdown.Item href="#">Our Team</NavDropdown.Item>
              <NavDropdown.Item href="#">Our Partners</NavDropdown.Item>
            </NavDropdown>
              <Nav.Link href="#">App</Nav.Link>
            <NavDropdown variant="dark" title="Citizen Science Project" id="basic-nav-dropdown">
              <NavDropdown.Item href="/faq">About + FAQ</NavDropdown.Item>
              {/* <NavDropdown.Item href="">Eclipse Features</NavDropdown.Item> */}
              <NavDropdown.Item href="/">Citizen Science Project</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">Blog</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    );
  }
}


export default Header;