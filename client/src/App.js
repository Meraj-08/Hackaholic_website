import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SchedulePage from './pages/SchedulePage';
import ContactPage from './pages/ContactPage';
import EventsPage from './pages/EventsPage';
import CertificatePage from './pages/CertificatePage';
import ResultPage from './pages/ResultPage';
// import RegisterPage from './pages/RegisterPage';
import './App.css';

function App() {
  return (
    <AppContainer>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/result" element={<ResultPage />} />
        {/* <Route path="/register" element={<RegisterPage />} /> */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/schedule" element={<SchedulePage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/certificate" element={<CertificatePage />} />
        <Route path="/contact" element={<ContactPage />} />
        
      </Routes>
      <Footer />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export default App;