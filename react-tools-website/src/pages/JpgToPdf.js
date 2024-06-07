import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';

const ImageToPdf = () => {
  const [file, setFile] = useState(null);
  const [processing, setProcessing] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleConvert = async () => {
    if (!file) {
      alert('Please choose an image file first');
      return;
    }

    setProcessing(true);

    try {
      const formData = new FormData();
      formData.append('imageFile', file);

      const response = await axios.post('http://localhost:5000/convert-image-to-pdf', formData, {
        responseType: 'blob', // Important: responseType must be 'blob' for file download
      });

      // Create a blob from the response data
      const blob = new Blob([response.data], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);

      // Create a link element, set download attribute and click it programmatically
      const link = document.createElement('a');
      link.href = url;
      link.download = 'converted_document.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setFile(null); // Clear selected file
    } catch (error) {
      console.error('Error converting image:', error);
      alert('Error converting image. Please try again.');
    } finally {
      setProcessing(false);
    }
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <h2 className="text-center">Image to PDF Converter</h2>
          <input type="file" onChange={handleFileChange} />
          <Button variant="primary" onClick={handleConvert} disabled={!file || processing}>
            {processing ? 'Processing...' : 'Convert to PDF'}
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ImageToPdf;
