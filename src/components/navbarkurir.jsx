import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './img/logo atas.png';
import { Link } from "react-router-dom";

// Import statements
// Import statements

function NavbarKurir() {
  const navbarStyle = {
    padding: '0 50px',
    height: '80px',
  };

  const navLinkStyle = {
    marginRight: '20px',
  };

  const masukButtonStyle = {
    minWidth: '100px',
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary" style={navbarStyle}>
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className={`ms-auto me-0 my-2 my-lg-0 d-lg-flex`} navbarScroll>
            <Nav.Link href="/Ambilperangkat" style={navLinkStyle}>
              Jemput Perangkat
            </Nav.Link>
            <Nav.Link href="#action2" style={navLinkStyle}>
              Antar Perangkat
            </Nav.Link>
            <Link to="/">
              <Button variant="primary" style={masukButtonStyle}>
                Logout
              </Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarKurir;

