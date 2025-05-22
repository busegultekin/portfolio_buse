import './Welcome.css';

function Welcome() {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <h1 className="intro-title">
          <span className="typewriter-text">Merhaba, ben Buse!</span>
        </h1>
        <p className="home-subtitle">
          Frontend geliştirici / Bilgisayar Mühendisliği öğrencisi
        </p>
      </div>
    </section>
  );
}
export default Welcome;