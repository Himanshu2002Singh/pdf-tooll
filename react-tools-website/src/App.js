import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthProvider from './components/AuthContext';
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
import ResizeImage from './pages/ResizeImage';
import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';
import Rules from './components/Rules';
import ForgotPassword from './pages/Forgetpasword';
import PricingPage from './pages/Pricepage';


function App() {
  return (
    <div>
      <AuthProvider>
        
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/word-to-pdf" element={<DocxToPdf/>} />
        <Route path="/pdf-to-word" element={<PdfToDocx/>} />
        <Route path="/remove-image-background" element={<RemoveBackground />} />
        <Route path="/compress-image" element={<CompressImage />} />
        <Route path="/compress-pdf" element={<CompressPdf />} />
        <Route path="/jpg-to-pdf" element={<ImageToPdf />} />
        <Route path="/legal-data-privacy" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path='/merge-pdf' element={<MergePdf/>}/>
        <Route path='/terms-conditions' element={<Rules/>}/>
        <Route path='/image-resizer' element={<ResizeImage/>}/>
        <Route path='/user-login' element={<Login/>}/>
        <Route path='/user-signup' element={<CreateAccount/>}/>
        <Route path='/forget-password' element={<ForgotPassword/>}/>
        <Route path= '/user-premium' element={<PricingPage/>}/>
      </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
