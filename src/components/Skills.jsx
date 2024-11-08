import { React, useRef } from "react";
import "../css/skills.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import springBoot from "/images/springboot.png";
import vsc from "/images/vsc.png";
import postman from "/images/postman.png";
import { motion, useInView } from "framer-motion";
import {
  faJava,
  faReact,
  faNodeJs,
  faDocker,
  faGit,
} from "@fortawesome/free-brands-svg-icons";
function Skills() {
  const skills = [
    {
      id: 1,
      image: null,
      icon: faJava,
      nom: "Java",
      niveau: "Intermediaire",
      localisation: ["ISFCE"],
    },
    {
      id: 2,
      image: springBoot,
      icon: null,
      nom: "SpringBoot",
      niveau: "Intermediaire",
      localisation: ["ISFCE"],
    },
    {
      id: 3,
      image: null,
      icon: faReact,
      nom: "React",
      niveau: "Intermediaire",
      localisation: ["freeCodeCamp", "Udemy"],
    },
    {
      id: 4,
      image: null,
      icon: faNodeJs,
      nom: "NodeJS",
      niveau: "Intermediaire",
      localisation: ["Udemy"],
    },
    {
      id: 5,
      image: null,
      icon: faDocker,
      nom: "Docker",
      niveau: "Débutant",
      localisation: ["Personal", "Internship"],
    },
  ];

  const tools = [
    {
      id: 1,
      image: vsc,
      icon: null,
      nom: "Visual Studio Code",
      niveau: "Intermediaire",
      localisation: ["ISFCE", "Personal"],
    },
    {
      id: 2,
      image: null,
      icon: faGit,
      nom: "Git",
      niveau: "Intermediaire",
      localisation: ["ISFCE", "Internship", "Personal"],
    },
    {
      id: 3,
      image: postman,
      icon: null,
      nom: "Postman",
      niveau: "Intermediaire",
      localisation: ["freeCodeCamp", "Udemy", "ISFCE"],
    },
  ];

  const skillRefs = skills.map(() => useRef(null));
  const toolRefs = tools.map(() => useRef(null));
  return (
    <section id="skills">
      <h2>Mes Compétences</h2>
      <div className="container-skills">
        <h3>Front-end / Back-end</h3>
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
                  delay: index * 0.1, // Décalage progressif pour chaque élément
                }}
                className="skill-card"
              >
                {skill.image ? (
                  <img
                    className="skill-img"
                    src={skill.image}
                    alt={skill.nom}
                  />
                ) : (
                  <FontAwesomeIcon icon={skill.icon} className="skill-icon" />
                )}
                <h3>{skill.nom}</h3>
                <p className="skill-level">{skill.niveau}</p>
                <p className="skill-location">
                  {skill.localisation.join(", ")}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="container-skills">
        <h3>Tools</h3>
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
                {tool.image ? (
                  <img className="skill-img" src={tool.image} alt={tool.nom} />
                ) : (
                  <FontAwesomeIcon icon={tool.icon} className="skill-icon" />
                )}
                <h3>{tool.nom}</h3>
                <p className="skill-level">{tool.niveau}</p>
                <p className="skill-location">{tool.localisation.join(", ")}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
