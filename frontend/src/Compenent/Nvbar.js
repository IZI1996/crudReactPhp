

import React, { Component } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class Nvbar extends Component {

      
  render() {
 
    return (
      <>
<Navbar bg="light" expand="lg">
  <Container fluid >
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/View">View</Nav.Link>
        <Nav.Link href="/session">Home</Nav.Link>
        <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
         <a href="logout">Logout</a>
      </Navbar.Text>
    </Navbar.Collapse>

      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
      </>
    );
  }
}
export default Nvbar;
