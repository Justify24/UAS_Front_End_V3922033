import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BsSpeedometer2, BsPatchCheck, BsGear } from 'react-icons/bs';

function Fitur() {
  return (
    <section className="py-5">
      <Container>
        <h2 className="text-center mb-4">Fitur</h2>
        <Row className="justify-content-center">
          <Col md={4} className="text-center">
            <BsSpeedometer2 className="h1 text-primary mb-3" />
            <h4>Fitur 1</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              fringilla mauris at odio dictum.
            </p>
          </Col>
          <Col md={4} className="text-center">
            <BsPatchCheck className="h1 text-primary mb-3" />
            <h4>Fitur 2</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              fringilla mauris at odio dictum.
            </p>
          </Col>
          <Col md={4} className="text-center">
            <BsGear className="h1 text-primary mb-3" />
            <h4>Fitur 3</h4>
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

export default Fitur;
