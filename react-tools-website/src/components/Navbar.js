import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { FaUserCircle, FaSignInAlt } from 'react-icons/fa'; // Import icons from react-icons library

const Navigation = () => {
  return (
    <header className="header">
      <Navbar expand="lg" className="navbar-custom">
        <Navbar.Brand href="/">
          <img
            src="/img/ilovepdf.svg"
            width="40"
            height="40"
            className="d-inline-block align-top"
            alt="iLovePDF"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto ">
            <Nav.Link href="#pdf-to-word">PDF to Word</Nav.Link>
            <Nav.Link href="#remove-bg">Remove Image Background</Nav.Link>
            <Nav.Link href="#compress-image">Compress Image</Nav.Link>
            <Nav.Link href="#compress-pdf">Compress PDF</Nav.Link>
            <Nav.Link href="#jpg-to-pdf">JPG to PDF</Nav.Link>
          </Nav>
          <Nav className="ml kip"> {/* Use ml-auto to push items to the right */}
            <Button variant="outline-dark" className="mr-5">
              <FaSignInAlt className="icon" /> Login
            </Button>
            <Button variant="danger">
              <FaUserCircle className="icon" /> Sign Up
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Navigation;
