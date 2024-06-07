import React, { useState } from 'react';
import { Container, Row, Col, Button, Spinner } from 'react-bootstrap';
import axios from 'axios';
import './Converter.css';  // Import the CSS file for custom styles

const DocxToPdf = () => {
  const [file, setFile] = useState(null);
  const [converting, setConverting] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleConvert = async () => {
    if (!file) {
      alert('Please choose a DOCX file first');
      return;
    }

    setConverting(true);

    try {
      const formData = new FormData();
      formData.append('docFile', file);

      const response = await axios.post('http://localhost:5000/convert-docx-to-pdf', formData, {
        responseType: 'blob',
      });

      const blob = new Blob([response.data], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'converted_document.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setFile(null);
    } catch (error) {
      console.error('Error converting DOCX:', error);
      alert('Error converting DOCX. Please try again.');
    } finally {
      setConverting(false);
    }
  };

  return (
    <Container className="mt-5 converter-container">
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <h2 className="text-center">DOCX to PDF Converter</h2>
          <input type="file" onChange={handleFileChange} />
          <Button onClick={handleConvert} disabled={!file || converting} className="mt-3 custom-button">
            {converting ? <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" /> : 'Convert to PDF'}
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default DocxToPdf;
