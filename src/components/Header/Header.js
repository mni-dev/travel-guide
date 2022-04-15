import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import './Header.css'

const Header = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Navbar Scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <input type="text" placeholder="search your destination" />
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link to="/">Home</Nav.Link>
              <Nav.Link  to="news">News</Nav.Link>
              <Nav.Link  to="destination">Destination</Nav.Link>
              <Nav.Link to="blog">Blog</Nav.Link>
              <Nav.Link to="contact">Contact</Nav.Link>
              <Nav.Link to="login">Login</Nav.Link>
              <Nav.Link to="register">Register</Nav.Link>
            </Nav>
          
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;