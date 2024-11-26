import React from "react";
import "../css/about.css";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    <section id="about">
      <motion.div
        className="content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2, delay: 0.7 }}
      >
        <h2>{t("about.title")}</h2>
        <p>
          <span className="color">{t("about.greeting")}</span>{" "}
          {t("about.intro")}
          <span className="color">{t("about.frontend")}</span> {t("about.and")}{" "}
          <span className="color">{t("about.backend")}</span>.{" "}
          {t("about.selfLearningStart")}
          <span className="color">{t("about.many")}</span>{" "}
          {t("about.selfLearningEnd")}.
        </p>
        <p>
          {t("about.eagerToLearn")}{" "}
          <span className="color">{t("about.thirstForKnowledge")}</span>.
        </p>
      </motion.div>
    </section>
  );
}

export default About;
