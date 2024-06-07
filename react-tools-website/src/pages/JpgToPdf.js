import React, { useState } from 'react';
import { Container, Row, Col, Button, Spinner } from 'react-bootstrap';
import axios from 'axios';

const ImageToPdf = () => {
  const [file, setFile] = useState(null);
  const [converting, setConverting] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleConvert = async () => {
    if (!file) {
      alert('Please choose an image file first');
      return;
    }

    setConverting(true);

    try {
      const formData = new FormData();
      formData.append('imageFile', file);

      const response = await axios.post('http://localhost:5000/image-to-pdf', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        responseType: 'blob',
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'converted_document.pdf');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error converting image:', error);
      alert('Error converting image. Please try again.');
    } finally {
      setConverting(false);
    }
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <h2 className="text-center">Image to PDF Converter</h2>
          <input type="file" onChange={handleFileChange} />
          <Button variant="primary" onClick={handleConvert} disabled={!file || converting} className="mt-3">
            {converting ? <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" /> : 'Convert to PDF'}
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ImageToPdf;
