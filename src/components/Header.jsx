import React from "react";
import "../css/header.css";

function Header() {
  const switchTheme = (e) => {
    if (e.target.checked) {
      document.querySelector("body").setAttribute("data-theme", "light");
    } else {
      document.querySelector("body").setAttribute("data-theme", "dark");
    }
  };
  return (
    <header>
      <nav>
        <div className="nav-title">Mon Portfolio</div>
        <div className="nav2nd">
          <ul className="nav-links">
            <li>
              <a href="#landing">Accueil</a>
            </li>
            <li>
              <a href="#projects">Projets</a>
            </li>
            <li>
              <a href="#skills">Compétences</a>
            </li>
            <li>
              <a href="#about">A propos</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>

          <label className="switch">
            <input type="checkbox" onChange={switchTheme} />
            <span className="slider round"></span>
          </label>
        </div>
      </nav>
    </header>
  );
}

export default Header;
