import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <h2 className="text-center">About Us</h2>
          <p className="text-center">This is a PDF tools application providing various functionalities like PDF to Word, Remove Image Background, Compress Image, Compress PDF, and JPG to PDF.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
