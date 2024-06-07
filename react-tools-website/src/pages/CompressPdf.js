import React, { useState } from 'react';
import { Container, Row, Col, Button, Spinner } from 'react-bootstrap';
import axios from 'axios';

const CompressPdf = () => {
  const [file, setFile] = useState(null);
  const [compressing, setCompressing] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleCompress = async () => {
    if (!file) {
      alert('Please choose a PDF file first');
      return;
    }

    setCompressing(true);

    try {
      const formData = new FormData();
      formData.append('pdfFile', file);

      const response = await axios.post('http://localhost:5000/compress-pdf', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        responseType: 'blob',
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'compressed_document.pdf');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error compressing PDF:', error);
      alert('Error compressing PDF. Please try again.');
    } finally {
      setCompressing(false);
    }
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <h2 className="text-center">Compress PDF</h2>
          <input type="file" onChange={handleFileChange} />
          <Button variant="primary" onClick={handleCompress} disabled={!file || compressing} className="mt-3">
            {compressing ? <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" /> : 'Compress PDF'}
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default CompressPdf;
