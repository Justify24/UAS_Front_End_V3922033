import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { BsFillPersonFill, BsLockFill } from 'react-icons/bs';
import NavbarLogin from '../components/navbarlogin';

function LoginPageKurir() {
  return (
    <>
      <NavbarLogin />
      <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
        <div className="w-100" style={{ maxWidth: '400px' }}>
          <Form className="p-5 border rounded">
            <h2 className="text-center mb-4">Login</h2>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label><BsFillPersonFill /> Username</Form.Label>
              <Form.Control type="text" placeholder="Enter username" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label><BsLockFill /> Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
              Submit
            </Button>
          </Form>
        </div>
      </Container>
    </>
  );
}

export default LoginPageKurir;
