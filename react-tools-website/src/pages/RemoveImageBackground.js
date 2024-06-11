import React, { useState } from 'react';
import { Container, Row, Col, Button, Spinner } from 'react-bootstrap';
import axios from 'axios';
import './Converter.css'; // Import a custom CSS file for additional styling
import Navigation from '../components/Navbar';
import AuthProvider from '../components/AuthContext';

const RemoveBackground = () => {
  const [file, setFile] = useState(null);
  const [removing, setRemoving] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleRemoveBackground = async () => {
    if (!file) {
      alert('Please choose an image file first');
      return;
    }

    setRemoving(true);

    try {
      const formData = new FormData();
      formData.append('imageFile', file);

      const response = await axios.post('http://localhost:5000/remove-background', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        responseType: 'blob',
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'bg_removed_image.png');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error removing background:', error);
      alert('Error removing background. Please try again.');
    } finally {
      setRemoving(false);
    }
  };

  return (
    <div>
    <AuthProvider>
    <Navigation/>
    </AuthProvider>
    <Container className="main">
      <Row>
        <Col md={{ span: 6, offset: 3 }} className="text-center">
          <h2 className="text-center font-weight-bold">Remove Image Background</h2>
          <p>
            Upload your image file to remove its background easily. This tool helps you create transparent backgrounds for your images, making them perfect for various uses such as graphic design, presentations, and more.
          </p>
          <input
            type="file"
            onChange={handleFileChange}
            className="d-none"
            id="file-input"
          />
          {!file && (
            <label htmlFor="file-input" className="btn btn-custom btn-lg mt-3">
              Select an Image File
            </label>
          )}
          {file && (
            <Button
              variant="danger"
              onClick={handleRemoveBackground}
              disabled={removing}
              className="btn btn-custom btn-lg mt-3"
            >
              {removing ? (
                <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
              ) : (
                'Remove Background'
              )}
            </Button>
          )}
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default RemoveBackground;
