import { useState } from "react";
import { motion } from "framer-motion";
import "./Projects.css";

function Projects() {

  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "AI Code Reviewer",
      description:"Developed an AI-powered code review platform that enables developers to analyze source code, identify potential issues, and receive intelligent improvement suggestions in real time. Integrated Google Gemini API with a modern React frontend and secure Node.js backend to deliver an efficient and interactive review experience.",
      tools:
        "React.js • Node.js • Express.js • MongoDB • Gemini API",
      github:
        "https://github.com/Sai-Tejaswini-02/AI_Code_Review",
      features: [
        "AI-powered code analysis",
        "Real-time review suggestions",
        "Google Gemini API integration",
        "Code quality feedback",
        "Responsive React interface",
        "Secure backend APIs",
      ],
    },

    {
      id: 2,
      title: "Movie Streaming App",
      description: "Built a full-stack movie streaming platform inspired by modern OTT applications, featuring secure authentication, personalized watchlists, advanced search, category-based browsing, and role-based access control. Designed with the MERN stack to provide a scalable, responsive, and user-friendly viewing experience.",
      tools:
        "React.js • Node.js • Express.js • MongoDB • JWT",
      github:
        "https://github.com/Sai-Tejaswini-02/Movie-app",
      features: [
        "User Authentication",
        "JWT Authorization",
        "Movie Search",
        "Category Filtering",
        "Watchlist Management",
        "Admin Dashboard",
      ],
    },
  ];

  return (
    <section
      id="projects"
      className="projects-section"
    >

      <motion.h2
        className="projects-title"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Projects
      </motion.h2>

      <div className="projects-container">

        {projects.map((project) => (

          <motion.div
            key={project.id}
            className={`project-card ${
              project.id === 1
                ? "project-card-1"
                : "project-card-2"
            }`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: project.id * 0.2,
            }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.03,
              y: -8,
            }}
          >

            <h3 className="project-name">
              {project.title}
            </h3>

            <p className="project-desc">
              {project.description}
            </p>

            <p className="project-tools">
              <strong>Tools:</strong>{" "}
              {project.tools}
            </p>

            <div className="project-links">

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <button
                className="feature-btn"
                onClick={() =>
                  setSelectedProject(project)
                }
              >
                Features
              </button>

            </div>

          </motion.div>

        ))}

      </div>

      {selectedProject && (

        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() =>
            setSelectedProject(null)
          }
        >
<motion.div
  className="feature-modal"
  initial={{
    opacity: 0,
    scale: 0.85,
    y: 30,
  }}
  animate={{
    opacity: 1,
    scale: 1,
    y: 0,
  }}
  exit={{
    opacity: 0,
    scale: 0.85,
    y: 30,
  }}
  transition={{
    duration: 0.35,
  }}
  onClick={(e) => e.stopPropagation()}
>
  <div className="modal-header">
    <h3>{selectedProject.title}</h3>

    <button
      className="close-icon"
      onClick={() => setSelectedProject(null)}
    >
      ✕
    </button>
  </div>

  <p className="modal-subtitle">
    Key Features
  </p>

  <div className="features-grid">
    {selectedProject.features.map((feature, index) => (
      <div className="feature-item" key={index}>
        ✓ {feature}
      </div>
    ))}
  </div>
</motion.div>
        </motion.div>

      )}

    </section>
  );
}

export default Projects;
