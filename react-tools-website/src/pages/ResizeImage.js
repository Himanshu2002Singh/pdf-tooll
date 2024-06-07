import React, { useState } from 'react';
import { Container, Row, Col, Button, Spinner, Form } from 'react-bootstrap';
import axios from 'axios';

const ResizeImage = () => {
  const [file, setFile] = useState(null);
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [resizing, setResizing] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleResize = async () => {
    if (!file || !width || !height) {
      alert('Please provide an image file and dimensions');
      return;
    }

    setResizing(true);

    try {
      const formData = new FormData();
      formData.append('imageFile', file);
      formData.append('width', width);
      formData.append('height', height);

      const response = await axios.post('http://localhost:5000/resize-image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        responseType: 'blob',
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'resized_image.jpg');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error resizing image:', error);
      alert('Error resizing image. Please try again.');
    } finally {
      setResizing(false);
    }
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <h2 className="text-center">Resize Image</h2>
          <input type="file" onChange={handleFileChange} />
          <Form.Group className="mt-3">
            <Form.Label>Width</Form.Label>
            <Form.Control type="number" value={width} onChange={(e) => setWidth(e.target.value)} />
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Label>Height</Form.Label>
            <Form.Control type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
          </Form.Group>
          <Button variant="primary" onClick={handleResize} disabled={!file || resizing} className="mt-3">
            {resizing ? <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" /> : 'Resize Image'}
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ResizeImage;
