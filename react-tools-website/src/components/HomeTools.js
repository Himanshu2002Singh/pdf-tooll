import React from 'react';
import './HomePage.css';

const functionalities = [
  { icon: 'fa-file-pdf', label: 'Merge PDF', link: '/merge-pdf', description: 'Combine multiple PDF files into one with our easy-to-use PDF merger.' },
  { icon: 'fa-compress-alt', label: 'Compress PDF', link: '/compress-pdf', description: 'Reduce the file size of your PDF documents while preserving quality.' },
  { icon: 'fa-file-word', label: 'PDF to Word', link: '/pdf-to-word', description: 'Convert PDF files to editable Microsoft Word documents (.docx) with high accuracy.' },
  { icon: 'fa-file-pdf', label: 'Word to PDF', link: '/word-to-pdf', description: 'Easily convert Microsoft Word documents (.docx) to PDF format for better compatibility.' },
  { icon: 'fa-file-image', label: 'JPG to PDF', link: '/jpg-to-pdf', description: 'Transform JPEG images into PDF documents quickly and effortlessly.' },
  { icon: 'fa-expand', label: 'Image Resizer', link: '/image-resizer', description: 'Resize images to specific dimensions or scale them down for web and sharing purposes.' },
  { icon: 'fa-compress', label: 'Image Compress', link: '/compress-image', description: 'Compress images to reduce file size without compromising visual quality.' },
  { icon: 'fa-eraser', label: 'Remove Image Background', link: '/remove-image-background', description: 'Remove the background from images automatically or manually with precision.' },
];

const HomeTools = () => {
  return (
    <div className="container">
      <div className="row">
        {functionalities.map((func, index) => (
          <div key={index} className="col-md-3 col-sm-6 mb-5">
            <a href={func.link} className="feature-box-link">
              <div className="feature-box text-center">
                <i className={`fas ${func.icon} fa-3x mb-3`} style={{ color: getColor(index) }}></i>
                <h5 className="text-uppercase">{func.label}</h5>
                <p>{func.description}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

// Function to dynamically assign different colors to icons
const getColor = (index) => {
  const colors = ['#4CAF50', '#2196F3', '#FF5722', '#9C27B0', '#FFC107', '#E91E63', '#795548', '#607D8B'];
  return colors[index % colors.length];
};

export default HomeTools;
