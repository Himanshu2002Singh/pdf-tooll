import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

const ContactUs = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <h2 className="text-center">Contact Us</h2>
          <Form>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
            </Form.Group>
            <Button variant="primary" type="submit" block>
              Send Message
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
