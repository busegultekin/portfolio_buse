import React from 'react';
import './Welcome.css';

function Welcome() {
  return (
    <section className="home-section" id="home">
      <div className="home-content">
        <h1 className="typewriter-text">Merhaba, ben Buse!</h1>
        <p className="home-subtitle">Frontend geliştirici / Bilgisayar Mühendisliği öğrencisi</p>
      </div>
    </section>
  );
}

export default Welcome;
