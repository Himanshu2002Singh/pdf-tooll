import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { FaUserCircle, FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import { useAuth } from './AuthContext';
// Assuming you have a CSS file for styling

const Navigation = () => {
  const { authState, logout } = useAuth();

  return (
    <header className="header ">
      <Navbar expand="lg" className="navbar-custom sticky-top">
        <Navbar.Brand href="/">
          <img
            src="/img/logo.png"
            width="40"
            height="40"
            className="d-inline-block align-top"
            alt="PDF"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/pdf-to-word">PDF to Word</Nav.Link>
            <Nav.Link href="/remove-image-background">Remove Image Background</Nav.Link>
            <Nav.Link href="/compress-image">Compress Image</Nav.Link>
            <Nav.Link href="/compress-pdf">Compress PDF</Nav.Link>
            <Nav.Link href="/jpg-to-pdf">JPG to PDF</Nav.Link>
          </Nav>
          <Nav className="ml kip">
            {authState.isLoggedIn ? (
              <>
                <Nav.Link href="/user-premium">
                  <FaUserCircle className="iconp" /> {authState.name}
                </Nav.Link>
                <Button variant="danger" onClick={logout}>
                  <FaSignOutAlt className="icon" /> Logout
                </Button>
              </>
            ) : (
              <>
                <a href='/user-login'>
                  <Button variant="outline-dark" className="mr-2">
                    <FaSignInAlt className="icon" /> Login
                  </Button>
                </a>
                <a href='/user-signup'>
                  <Button variant="danger">
                    <FaUserCircle className="icon" /> Sign Up
                  </Button>
                </a>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Navigation;
