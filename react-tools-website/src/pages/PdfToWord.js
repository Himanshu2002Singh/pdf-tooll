import React, { useState } from 'react';
import { Container, Row, Col, Button, Spinner } from 'react-bootstrap';
import axios from 'axios';
import './Converter.css'; // Import the CSS file for custom styles
import Navigation from '../components/Navbar';
import AuthProvider from '../components/AuthContext';

const PdfToDocx = () => {
  const [file, setFile] = useState(null);
  const [converting, setConverting] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleConvert = async () => {
    if (!file) {
      alert('Please choose a PDF file first');
      return;
    }

    setConverting(true);

    try {
      const formData = new FormData();
      formData.append('pdfFile', file);

      const response = await axios.post('http://localhost:5000/convert-pdf-to-docx', formData, {
        responseType: 'blob',
      });

      const blob = new Blob([response.data], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'converted_document.docx';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setFile(null);
    } catch (error) {
      if (error.response) {
        console.error('Error converting:', error.response.data.error);
        alert(error.response.data.error);
      } else if (error.request) {
        console.error('Network Error:', error.request);
        alert('Network Error. Please check your internet connection.');
      } else {
        console.error('Error:', error.message);
        alert('An unexpected error occurred. Please try again later.');
      }
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
        <Col md={{ span: 6, offset: 3 }} className="text-center">
          <h2 className="text-center font-weight-bold">PDF to DOCX Converter</h2>
          <p>
            Easily convert your PDF documents into editable DOCX files. Upload your PDF, click the "Convert to DOCX" button, and download the converted document instantly. Preserve formatting and content structure while enabling further editing in Microsoft Word or other compatible applications.
          </p>
          <input type="file" onChange={handleFileChange} className="d-none" id="file-input" />
          {!file && (
            <label htmlFor="file-input" className="btn btn-custom btn-lg mt-3">
              Select a PDF File
            </label>
          )}
          {file && (
            <Button
              variant='danger'
              onClick={handleConvert}
              disabled={converting}
              className="btn btn-custom btn-lg mt-3"
            >
              {converting ? (
                <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
              ) : (
                'Convert to DOCX'
              )}
            </Button>
          )}
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default PdfToDocx;
