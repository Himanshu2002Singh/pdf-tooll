import React, { useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Button, Spinner } from 'react-bootstrap';
import './Converter.css'; // Import a custom CSS file for additional styling

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
        <Col md={{ span: 6, offset: 3 }} className="text-center">
          <h2 className="text-center font-weight-bold">DOCX to PDF Converter</h2>
          <p>
            Convert your DOCX files to PDF format quickly and easily. This tool ensures your documents maintain formatting and are ready for sharing or printing.
          </p>
          <input type="file" onChange={handleFileChange} className="d-none" id="file-input" />
          {!file && (
            <label htmlFor="file-input" className="btn btn-custom btn-lg mt-3">
              Select a DOCX File
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
                <Spinner animation="border" size="sm" role="status" aria-hidden="true" />
              ) : (
                'Convert to PDF'
              )}
            </Button>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default DoxToPdf;
