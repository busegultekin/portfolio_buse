import './Portfolio.css';

function Portfolio() {
  return (
    <section id="portfolio" className="section portfolio-section">
      <div className="container">
        <h2>Projelerim</h2>
        <div className="projects">
          <div className="project-card">
            <h3>Metinlerde Duygu Analizi Projesi</h3><br></br>
            <p>Flask ile geliştirdiğim bu projede Türkçe metinler üzerinde duygu analizi yapılıyor.</p>
           <a href="https://github.com/busegultekin/sentiment-analysis-project" className="btn-small">Projeyi Gör</a>
          </div>
          <div className="project-card">
            <h3>USB Cihaz Engelleme Yazılımı</h3><br></br>
            <p>C++ kullanarak geliştirdiğim ve bilgisayara takılan USB cihazlarının algılanması sağlayan ve istenilen USB cihazlarının<br></br>
            sisteme erişimini engelleyen yazılım.</p>
          </div>
          <div className="project-card">
            <h3>Pet Klinik Takip Uygulaması</h3><br></br>
            <p>HTML, CSS, JavaScript, Electron ve React teknolojileri kullanarak bir veteriner kliniği için hasta takip uygulaması geliştirdim.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Portfolio;
