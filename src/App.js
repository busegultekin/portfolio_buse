import React, { useState, useEffect } from 'react';
import Sidebar from './Components/Sidebar';
import Welcome from './Components/Welcome';
import About from './Components/About';
import Skills from './Components/Skills';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
import SocialMedia from './Components/Socialmedia';
import Footer from './Components/Footer';

import './App.css';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Ekran boyutuna göre ilk durumu belirle
  useEffect(() => {
    const handleResize = () => {
      setIsSidebarOpen(window.innerWidth > 768);
    };

    handleResize(); // Sayfa yüklendiğinde çağır
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="layout">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className={`main-content ${isSidebarOpen ? 'with-sidebar' : 'full-width'}`}>
        <div id="top"></div>
        <Welcome />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
        <SocialMedia />
        <Footer />
        <a href="#top" className="scroll-to-top"> ↑ </a>
      </div>
    </div>
  );
}

export default App;






