import { React, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import "../css/header.css";

function Header() {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const switchTheme = (e) => {
    if (e.target.checked) {
      document.querySelector("body").setAttribute("data-theme", "light");
    } else {
      document.querySelector("body").setAttribute("data-theme", "dark");
    }
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setIsHovered(false);
  };

  return (
    <header>
      <nav>
        <div className="nav2nd">
          <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
            <li>
              <a href="#landing">{t("header.home")}</a>
            </li>
            <li>
              <a href="#projects">{t("header.projects")}</a>
            </li>
            <li>
              <a href="#skills">{t("header.skills")}</a>
            </li>
            <li>
              <a href="#contact">{t("header.contact")}</a>
            </li>
          </ul>

          <div
            className="language-switcher"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <button>{t("header.language")} ▼</button>
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="dropdown-menu"
                >
                  <button onClick={() => changeLanguage("en")}>EN</button>
                  <button onClick={() => changeLanguage("fr")}>FR</button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <label className="switch">
            <input type="checkbox" onChange={switchTheme} />
            <span className="slider round"></span>
          </label>

          <button
            className={`burger-menu ${menuOpen ? "active" : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
