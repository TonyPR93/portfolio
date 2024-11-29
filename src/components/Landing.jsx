import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "../css/Landing.css";

function Landing() {
  const { t } = useTranslation();

  return (
    <section id="landing">
      <div className="content">
        <motion.div
          className="intro-paragraph"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.1 }}
        >
          <p>{t("landing.intro")}</p>
        </motion.div>
        <motion.div
          className="header-title"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.2 }}
        >
          <h1>{t("landing.name")}</h1>
        </motion.div>
        <motion.div
          className="subtitle"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.3 }}
        >
          <p>{t("landing.description")}</p>
        </motion.div>
        <motion.div
          className="button-container"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.4 }}
        >
          <a
            href="https://github.com/TonyPR93/"
            target="_blank"
            className="button"
          >
            {t("landing.links.github")}
          </a>
          <a
            href="https://www.freecodecamp.org/fcc54dc0c4c-4654-4716-9a4b-fc304164949c"
            target="_blank"
            className="button"
          >
            {t("landing.links.freecodecamp")}
          </a>
          <a
            href="https://www.linkedin.com/in/anthony-panont-631067160/"
            target="_blank"
            className="button"
          >
            {t("landing.links.linkedin")}
          </a>
          <a
            href="https://codepen.io/TonyPR"
            target="_blank"
            className="button"
          >
            {t("landing.links.codepen")}
          </a>
        </motion.div>
        {/* <motion.div
          className="button-container"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.5 }}
        >
          <a href="/cv.pdf" download="Anthony_CV.pdf" className="button">
            {t("landing.links.download")}
          </a>
        </motion.div> */}
      </div>
    </section>
  );
}

export default Landing;
