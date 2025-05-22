import React from 'react';
import './Sidebar.css';

function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <>
      <div className="burger-icon" onClick={toggleSidebar}>☰</div>
      <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <img src="/images/images.jpeg" alt="Profil" className="profile-pic" />
        <h2>Buse Gültekin</h2>
        <p>Frontend Developer</p>
        <nav>
          <a href="#home" onClick={toggleSidebar}>Ana Sayfa</a>
          <a href="#about" onClick={toggleSidebar}>Ben Kimim?</a>
          <a href="#skills" onClick={toggleSidebar}>Neler Yapabilirim?</a>
          <a href="#portfolio" onClick={toggleSidebar}>Portfolyo</a>
          <a href="#contact" onClick={toggleSidebar}>İletişim</a>
          <a href="#social-media" onClick={toggleSidebar}>Sosyal Medya</a>
        </nav>
      </div>
    </>
  );
}

export default Sidebar;


