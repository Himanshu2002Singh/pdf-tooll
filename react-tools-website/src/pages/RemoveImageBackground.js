import React, { useState } from 'react';
import { Container, Row, Col, Button, Spinner } from 'react-bootstrap';
import axios from 'axios';

const RemoveBackground = () => {
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

            const response = await axios.post('http://localhost:5000/remove-background', formData, {
                responseType: 'blob',
            });

            // Create a blob from the response data
            const blob = new Blob([response.data], { type: 'image/png' });

            // Create a temporary URL to download the file
            const url = window.URL.createObjectURL(blob);

            // Create a link element, set download attribute, and click it programmatically
            const link = document.createElement('a');
            link.href = url;
            link.download = 'removed_background_image.png';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            setFile(null);
        } catch (error) {
            console.error('Error removing background:', error);
            alert('Error removing background. Please try again.');
        } finally {
            setConverting(false);
        }
    };

    return (
        <Container className="mt-5">
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <h2 className="text-center">Image Background Removal</h2>
                    <input type="file" accept="image/*" onChange={handleFileChange} />
                    <Button variant="primary" onClick={handleConvert} disabled={!file || converting}>
                        {converting ? <Spinner animation="border" size="sm" /> : 'Remove Background'}
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default RemoveBackground;
