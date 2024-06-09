import React, { useState } from 'react';
import { Container, Row, Col, Button, Spinner } from 'react-bootstrap';
import axios from 'axios';
import './Converter.css'; // Import a custom CSS file for additional styling

const MergePdf = () => {
  const [files, setFiles] = useState(null);
  const [merging, setMerging] = useState(false);

  const handleFileChange = (e) => {
    setFiles(e.target.files);
  };

  const handleMerge = async () => {
    if (!files || files.length < 2) {
      alert('Please select at least two PDF files to merge.');
      return;
    }

    setMerging(true);

    try {
      const formData = new FormData();
      for (let i = 0; i < files.length; i++) {
        formData.append('files[]', files[i]);
      }

      const response = await axios.post('http://localhost:5000/merge-pdf', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        responseType: 'blob',
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'merged_document.pdf');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error merging PDFs:', error);
      alert('Error merging PDFs. Please try again.');
    } finally {
      setMerging(false);
    }
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col md={{ span: 7, offset: 2 }} className="text-center">
          <h1 className="text-center font-weight-bold">Merge PDF Files</h1>
          <p>
            Select multiple PDF files to merge into a single document. Ensure you select at least two files for merging.
          </p>
          <input
            type="file"
            onChange={handleFileChange}
            multiple
            className="d-none"
            id="file-input"
          />
          {!files && (
            <label htmlFor="file-input" className="btn btn-custom btn-lg mt-3">
              Select PDF Files
            </label>
          )}
          {files && (
            <Button
              variant="danger"
              onClick={handleMerge}
              disabled={merging}
              className="btn btn-custom btn-lg mt-3"
            >
              {merging ? (
                <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
              ) : (
                'Merge PDFs'
              )}
            </Button>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default MergePdf;
