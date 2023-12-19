import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function About() {
  return (
    <section className="py-5">
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col md={6}>
            <h2 className="text-center mb-4">Tentang Kami</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              fringilla mauris at odio dictum, ac tincidunt mi tempus. Integer
              tristique, est in interdum cursus, ipsum neque maximus eros, id
              varius mauris tellus eu arcu.
            </p>
            <p>
              Nunc tincidunt auctor sapien, in gravida dui. Vivamus tristique
              tellus in dui varius, ac volutpat leo laoreet. Sed vitae dolor
              vitae ex cursus fringilla. Phasellus efficitur augue non sapien
              fermentum, sit amet laoreet nunc viverra.
            </p>
            <p>
              Nunc tincidunt auctor sapien, in gravida dui. Vivamus tristique
              tellus in dui varius, ac volutpat leo laoreet. Sed vitae dolor
              vitae ex cursus fringilla. Phasellus efficitur augue non sapien
              fermentum, sit amet laoreet nunc viverra.
            </p>
            <p>
              Nunc tincidunt auctor sapien, in gravida dui. Vivamus tristique
              tellus in dui varius, ac volutpat leo laoreet. Sed vitae dolor
              vitae ex cursus fringilla. Phasellus efficitur augue non sapien
              fermentum, sit amet laoreet nunc viverra.
            </p>
          </Col>
          <Col md={6} className="text-center">
            <img
              src="https://plus.unsplash.com/premium_photo-1663040328406-bbd2c19549a5?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="About us"
              className="img-fluid rounded"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
