import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from './img/logo atas.png';

function NavbarLogin() {
  const navbarStyle = {
    padding: '0 50px',
    height: '80px',
  };

  const navLinkStyle = {
    marginRight: '20px',
  };

  const masukButtonStyle = {
    minWidth: '100px',
    marginRight: '10px', // Menambahkan jarak antara tombol
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary" style={navbarStyle}>
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto me-0 my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to="/registerteknisi">
              <Button variant="primary" style={masukButtonStyle}>
                Daftar 
              </Button>
            </Link>
            {/* ...Tambahkan tombol lainnya di sini */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarLogin;
