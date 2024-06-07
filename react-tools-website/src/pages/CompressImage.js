import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

const CompressImage = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate file processing logic
    alert('Image has been compressed');
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <h2 className="text-center">Compress Image</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.File id="imageFile" label="Choose Image file" custom onChange={handleFileChange} />
            </Form.Group>
            <Button variant="primary" type="submit" block>
              Compress Image
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default CompressImage;
