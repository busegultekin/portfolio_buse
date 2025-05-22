import './Portfolio.css';

function Portfolio() {
  return (
    <section id="portfolio" className="section portfolio-section">
      <div className="container">
        <h2>Projelerim</h2>
        <div className="projects">
          <div className="project-card">
            <h3>Pet Klinik Takip Uygulaması</h3>
            <p>HTML, CSS, JavaScript, Electron ve React teknolojileri kullanarak bir veteriner kliniği için hasta takip uygulaması geliştirdim.</p>
            <a href="#" className="btn-small">Projeyi Gör</a>
          </div>
          <div className="project-card">
            <h3>Metinlerde Duygu Analizi Projesi</h3>
            <p>Flask ile geliştirdiğim bu projede Türkçe metinler üzerinde duygu analizi yapılıyor.</p>
           <a href="#" className="btn-small">Projeyi Gör</a>
          </div>
          <div className="project-card">
            <h3>USB Cihaz Engelleme Yazılımı</h3>
            <p>C++ ile USB cihazlarının sisteme erişimini engelleyen bir yazılım geliştirdim.</p>
           <a href="#" className="btn-small">Projeyi Gör</a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Portfolio;
