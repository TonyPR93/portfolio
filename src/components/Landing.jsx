import React from "react";
import { motion } from "framer-motion";
import "../css/Landing.css";

function Landing() {
  return (
    <section id="landing">
      <div className="content">
        <motion.div
          className="intro-paragraph"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2, delay: 0.1 }}
        >
          <p>Hi there, I'm</p>
        </motion.div>
        <motion.div
          className="header-title"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2, delay: 0.2 }}
        >
          <h1>Anthony Panont</h1>
        </motion.div>
        <motion.div
          className="subtitle"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2, delay: 0.3 }}
        >
          <p>I'm a curious developer who loves to learn new things</p>
        </motion.div>
        <motion.div
          className="paragraph"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2, delay: 0.4 }}
        >
          <p>
            Bienvenue sur mon portfolio ! En tant que développeur passionné et
            rigoureux, j'adore relever des défis et apprendre de nouvelles
            techniques pour m'améliorer.
            <br /> Découvrez ici mes projets, qui illustrent mon parcours et mes
            compétences.
            <br /> Mon ambition est de créer des solutions pratiques et
            intuitives, et de contribuer à des équipes dynamiques prêtes à
            innover.
          </p>
        </motion.div>
        <motion.div
          className="button-container"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2, delay: 0.5 }}
        >
          <a href="#projects" className="button">
            Github
          </a>
          <a href="#projects" className="button">
            freeCodeCamp
          </a>
          <a href="#projects" className="button">
            LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Landing;
