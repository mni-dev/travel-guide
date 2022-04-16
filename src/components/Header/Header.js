import React from 'react';
import {Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          {/* <Navbar.Brand href="#">Navbar Scroll</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <input type="text" placeholder="search your destination" />
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px'}}
              navbarScroll
            >
              <Link to="/">Home</Link>
              <Link to="news">News</Link>
              <Link to="destination">Destination</ Link>
              <Link to="blog">Blog</Link>
              <Link to="contact">Contact</Link>
              <Link to="login">Login</Link>
              <Link to="register">Register</Link>
            </Nav>
          
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;