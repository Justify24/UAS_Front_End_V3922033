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

function NavbarLanding() {
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
            <Nav.Link href="#action1" style={navLinkStyle}>
              Layanan
            </Nav.Link>
            <Nav.Link href="#action1" style={navLinkStyle}>
              Tentang Kami
            </Nav.Link>
            <Nav.Link href="#action2" style={navLinkStyle}>
              Testimoni
            </Nav.Link>
            <Nav.Link href="#action2" style={navLinkStyle}>
              Kontak Kami 
            </Nav.Link>
            <Link to="/login">
              <Button variant="primary" style={masukButtonStyle}>
                Masuk
              </Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarLanding;

