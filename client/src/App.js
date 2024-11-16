import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AboutUs from './AboutUs'; // Corrected line
import ContactUs from './pages/Contact';
import ArtisensaPage from './pages/artisan';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<AboutUs />} /> 
        <Route path="/contact" element={<ContactUs />} /> 
        <Route path="/artisan" element={<ArtisensaPage />} /> 
      
      </Routes>
    </Router>
  );
};

export default App;
