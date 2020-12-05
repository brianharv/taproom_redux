import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';



function NavBar() {
  return(
    <React.Fragment>
      {/* <div className="nav"> */}
        <Navbar className="nav" bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">the Tap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Beers</Nav.Link>
              <Nav.Link href="#link">Shop</Nav.Link>
              <NavDropdown title="Explore" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Gallery</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Calendar</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Community</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Follow Us</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      {/* </div> */}
    </React.Fragment>
  );
}

export default NavBar;