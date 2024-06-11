import React, { useState } from 'react';
import { Container, Row, Col, Button, Spinner } from 'react-bootstrap';
import axios from 'axios';
import './Converter.css'; // Import a custom CSS file for additional styling
import Navigation from '../components/Navbar';
import AuthProvider from '../components/AuthContext';

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
    <div>
   <AuthProvider>
    <Navigation/>
    </AuthProvider>
    <Container className="main">
      <Row>
        <Col md={{ span: 7, offset: 2 }} className="text-center">
          <h1 className="text-center font-weight-bold">Image to PDF Converter</h1>
          <p>
            Upload your image file and convert it to a PDF easily. This tool helps you create a PDF document from your images quickly and efficiently.
          </p>
          <input
            type="file"
            onChange={handleFileChange}
            className="d-none"
            id="file-input"
          />
          {!file && (
            <label htmlFor="file-input" className="btn btn-custom btn-lg mt-3">
              Select Image File
            </label>
          )}
          {file && (
            <Button
              variant="danger"
              onClick={handleConvert}
              disabled={converting}
              className="btn btn-custom btn-lg mt-3"
            >
              {converting ? (
                <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
              ) : (
                'Convert to PDF'
              )}
            </Button>
          )}
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default ImageToPdf;
