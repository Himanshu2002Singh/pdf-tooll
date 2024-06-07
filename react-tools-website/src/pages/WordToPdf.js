import React, { useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Button } from 'react-bootstrap';

const DoxToPdf = () => {
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
          responseType: 'blob', // Important: responseType must be 'blob' for file download
        });
  
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'converted_document.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
  
        setFile(null); // Clear selected file
      } catch (error) {
        console.error('Error converting DOCX:', error);
        alert('Error converting DOCX. Please try again.');
      } finally {
        setConverting(false);
      }
    };
  
    return (
      <Container className="mt-5">
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <h2 className="text-center">DOCX to PDF Converter</h2>
            <input type="file" onChange={handleFileChange} />
            <Button variant="primary" onClick={handleConvert} disabled={!file || converting} className="mt-3">
              {converting ? 'Converting...' : 'Convert to PDF'}
            </Button>
          </Col>
        </Row>
      </Container>
    );
  };
  

export default DoxToPdf;
