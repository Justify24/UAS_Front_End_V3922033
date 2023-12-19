import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Testimoni() {
  return (
    <section className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">Testimoni</h2>
        <Row className="justify-content-center">
          <Col md={6} className="text-center">
            <img
              src="https://amp.nextgen-auto.com/IMG/logo/ferrari0_4_-3.jpg"
              alt="Testimonial"
              className="rounded-circle mb-3"
              style={{ width: '120px', height: '120px', objectFit: 'cover' }}
            />
            <h4>John Doe</h4>
            <p className="text-muted">CEO, Company Name</p>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              fringilla mauris at odio dictum."
            </p>
          </Col>
          <Col md={6} className="text-center">
            <img
              src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?auto=format&fit=crop&q=80&w=1200"
              alt="Testimonial"
              className="rounded-circle mb-3"
              style={{ width: '120px', height: '120px', objectFit: 'cover' }}
            />
            <h4>Jane Doe</h4>
            <p className="text-muted">CTO, Company Name</p>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              fringilla mauris at odio dictum."
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Testimoni;
