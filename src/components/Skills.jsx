import { React, useRef, useState, useEffect } from "react";
import "../css/skills.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import springBoot from "/images/springboot.png";
import springBootdark from "/images/springbootdark.png";
import vsc from "/images/vsc.png";
import vscdark from "/images/vscdark.png";
import postman from "/images/postman.png";
import postmandark from "/images/postmandark.png";
import { motion, useInView } from "framer-motion";
import {
  faJava,
  faReact,
  faNodeJs,
  faDocker,
  faGit,
} from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";

function Skills() {
  const { t } = useTranslation();
  const [isDarkMode, setIsDarkMode] = useState(
    document.querySelector("body").getAttribute("data-theme") === "dark",
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const currentTheme = document
        .querySelector("body")
        .getAttribute("data-theme");
      setIsDarkMode(currentTheme === "dark");
    });

    observer.observe(document.querySelector("body"), {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  const skills = [
    {
      id: 1,
      imageLight: null,
      imageDark: null,
      icon: faJava,
      nom: "Java",
      niveau: "Intermediate",
      localisation: ["ISFCE"],
    },
    {
      id: 2,
      imageLight: springBoot,
      imageDark: springBootdark,
      icon: null,
      nom: "SpringBoot",
      niveau: "Intermediate",
      localisation: ["ISFCE"],
    },
    {
      id: 3,
      imageLight: null,
      imageDark: null,
      icon: faReact,
      nom: "React",
      niveau: "Intermediate",
      localisation: ["freeCodeCamp", "Udemy"],
    },
    {
      id: 4,
      imageLight: null,
      imageDark: null,
      icon: faNodeJs,
      nom: "NodeJS",
      niveau: "Intermediate",
      localisation: ["Udemy"],
    },
    {
      id: 5,
      imageLight: null,
      imageDark: null,
      icon: faDocker,
      nom: "Docker",
      niveau: "Beginner",
      localisation: ["Internship"],
    },
  ];

  const tools = [
    {
      id: 1,
      imageLight: vsc,
      imageDark: vscdark,
      icon: null,
      nom: "VSC",
      niveau: "Intermediate",
      localisation: ["ISFCE"],
    },
    {
      id: 2,
      imageLight: null,
      imageDark: null,
      icon: faGit,
      nom: "Git",
      niveau: "Intermediate",
      localisation: ["ISFCE", "Internship"],
    },
    {
      id: 3,
      imageLight: postman,
      imageDark: postmandark,
      icon: null,
      nom: "Postman",
      niveau: "Intermediate",
      localisation: ["freeCodeCamp", "Udemy", "ISFCE"],
    },
  ];

  const skillRefs = skills.map(() => useRef(null));
  const toolRefs = tools.map(() => useRef(null));

  console.log(isDarkMode);
  return (
    <section id="skills">
      <h2>{t("skills.title")}</h2>
      <div className="container-skills">
        <h3>{t("skills.frontendBackend")}</h3>
        <div className="skills-grid">
          {skills.map((skill, index) => {
            const isInView = useInView(skillRefs[index]);

            return (
              <motion.div
                key={skill.id}
                ref={skillRefs[index]}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.2,
                  delay: index * 0.1,
                }}
                className="skill-card"
              >
                {skill.imageLight || skill.imageDark ? (
                  <img
                    className="skill-img"
                    src={isDarkMode ? skill.imageLight : skill.imageDark}
                    alt={skill.nom}
                  />
                ) : (
                  <FontAwesomeIcon icon={skill.icon} className="skill-icon" />
                )}
                <h3>{t(`skills.skills.${skill.nom}`)}</h3>
                <p className="skill-level">
                  {t(`skills.level.${skill.niveau}`)}
                </p>
                <p className="skill-location">
                  {skill.localisation
                    .map((loc) => t(`skills.location.${loc}`))
                    .join(", ")}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="container-skills">
        <h3>{t("skills.toolstitle")}</h3>
        <div className="skills-grid">
          {tools.map((tool, index) => {
            const isInView = useInView(toolRefs[index], { triggerOnce: true });

            return (
              <motion.div
                key={tool.id}
                ref={toolRefs[index]}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.2,
                  delay: index * 0.1,
                }}
                className="skill-card"
              >
                {tool.imageLight || tool.imageDark ? (
                  <img
                    className="skill-img"
                    src={isDarkMode ? tool.imageLight : tool.imageDark}
                    alt={tool.nom}
                  />
                ) : (
                  <FontAwesomeIcon icon={tool.icon} className="skill-icon" />
                )}
                <h3>{t(`skills.tools.${tool.nom}`)}</h3>
                <p className="skill-level">
                  {t(`skills.level.${tool.niveau}`)}
                </p>
                <p className="skill-location">
                  {tool.localisation
                    .map((loc) => t(`skills.location.${loc}`))
                    .join(", ")}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
