import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PrivacyPL from './pages/PrivacyPL';
import PrivacyEN from './pages/PrivacyEN';
import TermsPL from './pages/TermsPL';
import TermsEN from './pages/TermsEN';
import NotFound from './pages/NotFound';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy-pl" element={<PrivacyPL />} />
        <Route path="/privacy-policy-en" element={<PrivacyEN />} />
        <Route path="/terms-and-conditions-pl" element={<TermsPL />} />
        <Route path="/terms-and-conditions-en" element={<TermsEN />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
