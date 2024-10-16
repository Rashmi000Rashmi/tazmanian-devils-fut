import logo from './logo.svg';
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Pages/Home';
import Services from './Pages/Services';
import AboutUs from './Pages/AboutUs';
import Events from './Pages/Events';
import ContactUs from './Pages/ContactUs';
import Groups from './Pages/Groups';

function App() {
  return (
    <Router>
      <div className="App">
      <Header />
      <main className="content">
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/events" element={<Events />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/groups" element={<Groups />} />
      </Routes> 
      </main>
      <Footer />

    </div>
    </Router>
  );
}

export default App;
