import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navbar';
import CompressImage from './pages/CompressImage';
import CompressPdf from './pages/CompressPdf';
import About from './components/About';
import ContactUs from './components/ContactUs';
import RemoveBackground from './pages/RemoveImageBackground';
import ImageToPdf from './pages/JpgToPdf';
import HomePage from './components/Home';
import DocxToPdf from './pages/WordToPdf';
import PdfToDocx from './pages/PdfToWord';
import MergePdf from './pages/mergepdf';

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/word-to-pdf" element={<DocxToPdf/>} />
        <Route path="/pdf-to-word" element={<PdfToDocx/>} />
        <Route path="/remove-image-background" element={<RemoveBackground />} />
        <Route path="/compress-image" element={<CompressImage />} />
        <Route path="/compress-pdf" element={<CompressPdf />} />
        <Route path="/jpg-to-pdf" element={<ImageToPdf />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path='/merge-pdf' element={<MergePdf/>}/>
      </Routes>
    </div>
  );
}

export default App;
