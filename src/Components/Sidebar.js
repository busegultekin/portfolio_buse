import React from 'react';
import './Sidebar.css';

function Sidebar({ isOpen, toggleSidebar }) {
  const handleNavClick = () => {
    if (window.innerWidth <= 768) {
      toggleSidebar();
    }
  };

  return (
    <>
      <div className="burger-icon" onClick={toggleSidebar}>☰</div>
      <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <img src="/images/images.jpeg" alt="Profil" className="profile-pic" />
        <h2>Buse Gültekin</h2>
        <p>Full Stack Developer</p>
        <nav>
          <a href="#about" onClick={handleNavClick}>Ben Kimim?</a>
          <a href="#skills" onClick={handleNavClick}>Neler Yapıyorum ve de Neler Yapabilirim?</a>
          <a href="#portfolio" onClick={handleNavClick}>Projelerim</a>
          <a href="#contact" onClick={handleNavClick}>İletişim</a>
          <a href="#social-media" onClick={handleNavClick}>Sosyal Medya</a>
        </nav>
      </div>
    </>
  );
}

export default Sidebar;
