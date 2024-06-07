import React from 'react';
import './HomePage.css';

const functionalities = [
  { icon: 'fa-file-pdf', label: 'Merge PDF', link: '/merge-pdf' },
  { icon: 'fa-compress-alt', label: 'Compress PDF', link: '/compress-pdf' },
  { icon: 'fa-file-word', label: 'PDF to Word', link: '/pdf-to-word' },
  { icon: 'fa-file-pdf', label: 'Word to PDF', link: '/word-to-pdf' },
  { icon: 'fa-file-image', label: 'JPG to PDF', link: '/jpg-to-pdf' },
  { icon: 'fa-expand', label: 'Image Resizer', link: '/image-resizer' },
  { icon: 'fa-compress', label: 'Image Compress', link: '/image-compress' },
  { icon: 'fa-eraser', label: 'Remove Image Background', link: '/remove-image-background' },
];

const HomePage = () => {
  return (
    <div className="container">
      <div className="row">
        {functionalities.map((func, index) => (
          <div key={index} className="col-md-3 col-sm-6 mb-4">
            <a href={func.link} className="feature-box-link">
              <div className="feature-box text-center">
                <i className={`fas ${func.icon} fa-3x mb-3`}></i>
                <h5 className="text-uppercase">{func.label}</h5>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
