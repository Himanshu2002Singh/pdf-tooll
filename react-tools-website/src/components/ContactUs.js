import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import Navigation from './Navbar';
import Footer from './Fotter';
import AuthProvider from './AuthContext';
import './HomePage.css'

const ContactUs = () => {
  return (
    <div>
      <AuthProvider>
        <Navigation />
      </AuthProvider>
      <Container className="mt-0">
        <Row>
          <Col md={{ span: 7, offset: 2 }} className="bg-light p-4 rounded contact">
            <h2 className="text-center mt-3">Contact Us</h2>
            <Form className='main'>
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
      <Footer />
    </div>
  );
};

export default ContactUs;
