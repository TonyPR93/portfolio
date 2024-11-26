import React, { useState, useRef } from "react";
import "../css/projects.css";
import projects from "../data/projectData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, useInView } from "framer-motion";
import Carousel from "./Carousel";
import { useTranslation } from "react-i18next";

function Projects() {
  const { t, i18n } = useTranslation();
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects">
      <h2 className="titleIntro">{t("projects.title")}</h2>
      <div className="projects-container">
        {projects.map((project, index) => {
          const ref = React.useRef(null);
          const inView = useInView(ref, { margin: "-50px" });

          return (
            <motion.div
              key={project.id}
              ref={ref}
              className="project-card"
              onClick={() => handleProjectClick(project)}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="project-content">
                <div className="project-txt">
                  <h3>{project.name[i18n.language]}</h3>
                  <p>{project.description[i18n.language]}</p>
                  <div className="project-stack">
                    {project.stack.map((tech) => (
                      <span className="stack-item" key={tech}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="project-image">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.name[i18n.language]}
                    className="project-image-s"
                  />
                ) : (
                  <FontAwesomeIcon className="iconpng" icon={project.icon} />
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">
                {selectedProject.name[i18n.language]}
              </h3>
              <button className="close-button" onClick={closeModal}>
                X
              </button>
            </div>

            <div
              dangerouslySetInnerHTML={{
                __html: selectedProject.fullDescription[i18n.language],
              }}
            />
            <div className="containerStcImg">
              <div
                dangerouslySetInnerHTML={{
                  __html: selectedProject.fullStack[i18n.language],
                }}
              />
              {selectedProject.images && (
                <Carousel images={selectedProject.images} />
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
