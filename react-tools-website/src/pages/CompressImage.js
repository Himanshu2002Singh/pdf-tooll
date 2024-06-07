import React, { useState } from 'react';
import { Container, Row, Col, Button, Spinner, Form } from 'react-bootstrap';
import axios from 'axios';

const CompressImage = () => {
  const [file, setFile] = useState(null);
  const [quality, setQuality] = useState(75);
  const [compressing, setCompressing] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleCompress = async () => {
    if (!file) {
      alert('Please choose an image file first');
      return;
    }

    setCompressing(true);

    try {
      const formData = new FormData();
      formData.append('imageFile', file);
      formData.append('quality', quality);

      const response = await axios.post('http://localhost:5000/compress-image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        responseType: 'blob',
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'compressed_image.jpg');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error compressing image:', error);
      alert('Error compressing image. Please try again.');
    } finally {
      setCompressing(false);
    }
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <h2 className="text-center">Compress Image</h2>
          <input type="file" onChange={handleFileChange} />
          <Form.Group className="mt-3">
            <Form.Label>Quality (1-100)</Form.Label>
            <Form.Control type="number" value={quality} onChange={(e) => setQuality(e.target.value)} min="1" max="100" />
          </Form.Group>
          <Button variant="primary" onClick={handleCompress} disabled={!file || compressing} className="mt-3">
            {compressing ? <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" /> : 'Compress Image'}
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default CompressImage;
