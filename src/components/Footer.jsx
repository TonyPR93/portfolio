import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faCodepen,
  faFreeCodeCamp,
} from "@fortawesome/free-brands-svg-icons";
import "../css/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Panont Anthony</p>
      <div className="social-icons">
        <a
          href="https://github.com/TonyPR93/"
          target="_blank"
          className="icnfooter"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://www.linkedin.com/in/anthony-panont-631067160/"
          target="_blank"
          className="icnfooter"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>

        <a
          href="https://www.freecodecamp.org/fcc54dc0c4c-4654-4716-9a4b-fc304164949c"
          target="_blank"
          className="icnfooter"
        >
          <FontAwesomeIcon icon={faFreeCodeCamp} />
        </a>
        <a
          href="https://codepen.io/TonyPR"
          target="_blank"
          className="icnfooter"
        >
          <FontAwesomeIcon icon={faCodepen} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
