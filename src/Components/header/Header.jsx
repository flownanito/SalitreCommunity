import React, { useState } from "react";
import menu from "../../assets/16033.png";
import "./Header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">🎣 Salitre</div>
      <button className="menu-button" onClick={toggleMenu}>
        <img src={menu} alt="Menu" />
      </button>
      <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
        <ul className="nav-links">
          <li><a href="/Home">Inicio</a></li>
          <li><a href="/Shop">Tienda</a></li>
          <li><a href="/Team">Comunidad</a></li>
          <li><a href="/Profile">Perfil</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;