import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Hero.css';

const Hero = () => (
  <div className="hero-section">
    <Container>
      <Row className="align-items-center justify-content-center text-center">
        <Col>
          <div className="hero-text-bg">
            <h1>Welcome to VoltageVGC</h1>
            <p>Your ultimate destination for esports news and updates.</p>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Hero;
