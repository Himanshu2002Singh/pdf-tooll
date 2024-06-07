import React, { useState } from 'react';
import { Container, Row, Col, Button, Spinner } from 'react-bootstrap';
import axios from 'axios';

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
    <Container className="mt-5">
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <h2 className="text-center">Remove Image Background</h2>
          <input type="file" onChange={handleFileChange} />
          <Button variant="primary" onClick={handleRemoveBackground} disabled={!file || removing} className="mt-3">
            {removing ? <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" /> : 'Remove Background'}
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default RemoveBackground;
