import '../styles/components/_footer.scss'
import LogoW from '../assets/kasa-logo-w.png'
function Footer() {
  return (
    <footer>
        <img src={LogoW} alt="Kasa" />
        <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;