import React, { useState } from "react";
import "../css/projects.css";
import projects from "../data/projectData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" }); // démarre l'animation lorsque 50px sont visibles

  return (
    <section id="projects">
      <h2>Mes Projets</h2>
      <div className="projects-container">
        {projects.map((project, index) => {
          const ref = useRef(null);
          const inView = useInView(ref, { margin: "-50px" });

          return (
            <motion.div
              key={project.id}
              ref={ref}
              className="project-card"
              onClick={() => handleProjectClick(project)}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={inView ? { opacity: 1, x: 0 } : {}} // Lance l'animation uniquement quand inView est true
              transition={{ duration: 0.2 }}
              whileHover={{
                scale: 1.05,
              }}
            >
              <div className="project-content">
                <div className="project-txt">
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
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
                    alt={project.name}
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

      {/* Modal pour afficher les détails du projet */}
      {selectedProject && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>{selectedProject.name}</h3>
            <p>{selectedProject.description}</p>
            <button className="close-button" onClick={closeModal}>
              Fermer
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
