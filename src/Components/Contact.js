import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="contact-container">
        <div className="contact-info">
          <h3>Kişisel Bilgiler</h3>
          <p>📧 busegltkn12@gmail.com</p>
          <p>📞 +90 530 863 6619</p>
          <p>📍Bursa / Türkiye</p>
        </div>

        <div className="contact-form-wrapper">
          <h2>İletişim</h2>
          <form 
          action="https://formsubmit.co/greyjjk0@gmail.com" 
          method="POST"
          className="contact-form"
>
        <input type="text" name="name" placeholder="Adınız" required />
        <input type="email" name="email" placeholder="E-posta" required />
        <textarea name="message" placeholder="Mesajınız" rows="5" required></textarea>
        <button type="submit" className="btn">Gönder</button>
        </form>

        </div>
      </div>
    </section>
  );
}

export default Contact;

