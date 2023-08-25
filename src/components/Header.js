import {NavLink } from "react-router-dom";
import Logo from '../assets/kasa-logo.png'
function Header() {
  return (
    <header>
        <img src={Logo} alt="Kasa" />
        <nav>
            <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}>
                Accueil
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active" : "")}>
                À Propos
              </NavLink>
        </nav>
    </header>
  );
}

export default Header;
