import React from 'react';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <Navbar bg="light" variant="light" expand="lg" className="custom-navbar">
      <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
        <img
          src="https://via.placeholder.com/30"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="Logo"
        />
        <span className="ml-2">PDF Tools</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <NavDropdown title="Tools" id="basic-nav-dropdown" className="custom-dropdown">
            <NavDropdown.Item as={Link} to="/pdf-to-word">PDF to Word</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/remove-image-background">Remove Image Background</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/compress-image">Compress Image</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/compress-pdf">Compress PDF</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/jpg-to-pdf">JPG to PDF</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link as={Link} to="/contact-us">
            <Button variant="outline-dark" className="mr-2">Contact Us</Button>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
