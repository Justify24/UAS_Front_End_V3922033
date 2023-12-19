import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap'; // tambahkan impor komponen yang diperlukan di sini
import { Link } from 'react-router-dom'; // tambahkan impor Link
import logo from './img/logo atas.png';

function NavbarRegistrasi() {
    const navbarStyle = {
      padding: '0 50px', // Sesuaikan dengan ukuran padding yang diinginkan
      height: '80px', // Sesuaikan dengan ukuran tinggi yang diinginkan
    };
  
    const navLinkStyle = {
      marginRight: '20px', // Sesuaikan dengan jarak yang diinginkan
    };
  
    const masukButtonStyle = {
      minWidth: '100px', // Sesuaikan lebar minimal yang diinginkan
      marginRight: '10px',
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
            </Nav>
            <Link to="/loginadmin">
              <Button variant="primary" style={masukButtonStyle}>
                Masuk 
              </Button>
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default NavbarRegistrasi;
