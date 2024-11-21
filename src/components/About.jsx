import React from "react";
import "../css/about.css";
import { motion } from "framer-motion";
function About() {
  return (
    <section id="about">
      <motion.div
        className="content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2, delay: 0.7 }}
      >
        <h2>À propos de moi</h2>
        <p>
          <span className="color"> Salut !</span> Moi, c'est Anthony, un
          développeur récemment diplômé de l'ISFCE, prêt à relever de nouveaux
          défis. Curieux de nature, j'aime explorer tous les aspects du
          développement, aussi bien en <span className="color">front-end </span>
          qu'en <span className="color">back-end </span> . En plus de mes
          études, j'ai enrichi mes compétences en suivant de
          <span className="color"> nombreux </span> cours en ligne, développant
          ainsi une approche autodidacte qui me permet d'apprendre en continu.
        </p>
        <p>
          Toujours à la recherche de nouvelles connaissances et d'occasions de
          grandir, je suis enthousiaste à l'idée de rejoindre une équipe où je
          pourrai apporter ma passion pour le développement et
          <span className="color"> ma soif d'apprendre.</span>
        </p>
      </motion.div>
    </section>
  );
}

export default About;
