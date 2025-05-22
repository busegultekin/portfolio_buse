import './Footer.css';

// Footer.js (veya App.js'in en altında olabilir)
function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Buse Gültekin • Tüm hakları saklıdır.</p>
    </footer>
  );
}

export default Footer;
