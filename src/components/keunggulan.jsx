import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BsPersonFill, BsArrowRight } from 'react-icons/bs';

function Keunggulan() {
  return (
    <section className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">Keunggulan</h2>
        <Row className="justify-content-center">
          <Col md={4} className="text-center">
            <BsPersonFill
              className="h1 text-primary mb-3"
              style={{ fontSize: '50px', marginBottom: '20px' }}
            />
            <h4>Keunggulan 2</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              fringilla mauris at odio dictum.
            </p>
          </Col>
          <Col md={4} className="text-center">
            <BsArrowRight
              className="h1 text-primary mb-3"
              style={{ fontSize: '50px', marginBottom: '20px' }}
            />
            <h4>Keunggulan 3</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              fringilla mauris at odio dictum.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Keunggulan;
