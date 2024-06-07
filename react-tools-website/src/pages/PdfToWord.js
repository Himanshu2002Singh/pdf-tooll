import React, { useState } from 'react';
import { Container, Row, Col, Button, Spinner } from 'react-bootstrap';
import axios from 'axios';
import './Converter.css';  // Import the CSS file for custom styles

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
      if(error.response){
      console.error('Error converting:', error.response.data.error);
      alert(error.response.data.error); 
      } 
      else if (error.request) {
        // The request was made but no response was received
        console.error('Network Error:', error.request);
        alert('Network Error. Please check your internet connection.');
      
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error('Error:', error.message);
          alert('An unexpected error occurred. Please try again later.');
        }
      }
    finally {
      setConverting(false);
    }
  };

  return (
    <Container className="mt-5 converter-container">
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <h2 className="text-center">PDF to DOCX Converter</h2>
          <input type="file" onChange={handleFileChange} />
          <Button onClick={handleConvert} disabled={!file || converting} className="mt-3 custom-button">
            {converting ? <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" /> : 'Convert to DOCX'}
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default PdfToDocx;
