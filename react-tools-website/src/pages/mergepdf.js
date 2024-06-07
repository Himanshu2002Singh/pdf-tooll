import React, { useState } from 'react';
import { Container, Row, Col, Button, Spinner } from 'react-bootstrap';
import axios from 'axios';

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
        <Col md={{ span: 6, offset: 3 }}>
          <h2 className="text-center">Merge PDF Files</h2>
          <input type="file" onChange={handleFileChange} multiple />
          <Button variant="primary" onClick={handleMerge} disabled={!files || merging}>
            {merging ? <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" /> : 'Merge PDFs'}
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default MergePdf;
