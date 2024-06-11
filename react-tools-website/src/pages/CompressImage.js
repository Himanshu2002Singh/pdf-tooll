import React, { useState } from 'react';
import { Container, Row, Col, Button, Spinner, Form } from 'react-bootstrap';
import axios from 'axios';
import './Converter.css'; // Import a custom CSS file for additional styling
import Navigation from '../components/Navbar';
import AuthProvider from '../components/AuthContext';

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
    <div>
    <AuthProvider>
    <Navigation/>
    </AuthProvider>
    <Container className="main">
      <Row>
        <Col md={{ span: 7, offset: 2 }} className="text-center">
          <h1 className="text-center font-weight-bold">Compress Image</h1>
          <p>
            Upload your image file and compress it easily. Adjust the quality to balance between file size and image clarity. Perfect for sharing images with reduced file sizes.
          </p>
          <input
            type="file"
            onChange={handleFileChange}
            className="d-none"
            id="file-input"
          />
          <label htmlFor="file-input" className="btn btn-custom btn-lg mt-3">
            Select Image File
          </label>
          <Form.Group className="mt-3">
            <Form.Label>Quality (1-100)</Form.Label>
            <Form.Control
              type="number"
              value={quality}
              onChange={(e) => setQuality(e.target.value)}
              min="1"
              max="100"
              className="text-center"
            />
          </Form.Group>
          <Button
            onClick={handleCompress}
            disabled={compressing}
            className="btn btn-custom btn-lg mt-3"
          >
            {compressing ? (
              <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
            ) : (
              'Compress Image'
            )}
          </Button>
        </Col>
      </Row>
    </Container>
       </div>
  );
};

export default CompressImage;
