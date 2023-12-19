import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import NavbarRegistrasi from '../components/navbarregistrasi';
import { BsFillPersonFill, BsLockFill, BsMailbox2, BsFillPersonVcardFill } from 'react-icons/bs';

function RegisterPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <>
      <NavbarRegistrasi />
      <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
        <div className="w-100" style={{ maxWidth: '400px' }}>
          <Form className="p-5 border rounded">
            <h2 className="text-center mb-4">Register</h2>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label><BsFillPersonFill /> Username</Form.Label>
              <Form.Control type="text" placeholder="Enter username" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label><BsMailbox2 /> email</Form.Label>
              <Form.Control type="text" placeholder="Enter username" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label><BsFillPersonVcardFill /> nama</Form.Label>
              <Form.Control type="text" placeholder="Enter username" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label><BsLockFill /> Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label><BsLockFill /> RePassword</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
            <Button href="/login" variant="primary" type="submit" className="w-100">
              Submit
            </Button>
          </Form>
        </div>
      </Container>
    </>
  );
}

export default RegisterPage;
