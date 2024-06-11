import React, { useState } from 'react';
import { Container, Row, Col, Button, Spinner } from 'react-bootstrap';
import axios from 'axios';
import './Converter.css'; // Import a custom CSS file for additional styling
import Navigation from '../components/Navbar';
import AuthProvider from '../components/AuthContext';

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
    <div>
    <AuthProvider>
    <Navigation/>
    </AuthProvider>
    <Container className="main">
      <Row>
        <Col md={{ span: 7, offset: 2 }} className="text-center">
          <h1 className="text-center font-weight-bold">Compress PDF</h1>
          <p>
            Upload your PDF file and compress it easily. This tool helps you reduce the file size while maintaining the quality of the document. Perfect for sharing or storing your PDFs with less space.
          </p>
          <input
            type="file"
            onChange={handleFileChange}
            className="d-none"
            id="file-input"
          />
          {!file && (
            <label htmlFor="file-input" className="btn btn-custom btn-lg mt-3">
              Select PDF File
            </label>
          )}
          {file && (
            <Button
              variant="danger"
              onClick={handleCompress}
              disabled={compressing}
              className="btn btn-custom btn-lg mt-3"
            >
              {compressing ? (
                <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
              ) : (
                'Compress PDF'
              )}
            </Button>
          )}
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default CompressPdf;
