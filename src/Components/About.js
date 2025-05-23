import './About.css';

function About() {
  return (
    <section id="about" className="section about-section">
      <div className="about-container">
        <div className="about-content">
          <h2>Ben Kimim?</h2>
          <p>
            Ben Buse Gültekin. 20 yaşındayım. Bilgisayar Mühendisliği öğrencisiyim. 
            Yazılım ve teknolojiye olan ilgim sayesinde, bilgisayar mühendisliği
            alanında kendimi sürekli geliştirmeye çalışıyorum. Ayrıca, yapay
            zeka üzerine araştırmalar yapıyor, veri işleme ve makine
            öğrenmesi konularında kendimi geliştiriyorum.</p>
          <p>  
            Analitik düşünebilen, takım çalışmasına uyumlu ve çözüm odaklı
            biriyim. Yeni teknolojileri öğrenmeye açık olup, sorumluluk alarak
            projelerde aktif rol oynamaktan keyif alıyorum. Teknolojiyi
            yakından takip ederek öğrendiğim bilgileri pratiğe dökmeye ve
            kendimi sürekli geliştirmeye önem veriyorum.
          </p>
        </div>

        <div className="education-section">
          <h3>Eğitim Geçmişi</h3>
          <div className="education-cards">
            <div className="edu-card">
              <strong>Balıkesir Üniversitesi</strong>
              <p>Bilgisayar Mühendisliği<br></br>  2022 - Devam Ediyor</p>
            </div>
            <div className="edu-card">
              <strong>Bursa Özel İdea Koleji</strong>
              <p>2018 - 2022</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

