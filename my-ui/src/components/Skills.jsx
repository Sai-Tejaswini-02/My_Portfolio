import { motion } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiVercel,
  SiRender,
  SiOpenai,
  SiGooglegemini,
} from "react-icons/si";

import "./Skills.css";

function Skills() {
  const row1 = [
    {
      title: "Frontend",
      skills: [
        { name: "React.js", icon: <FaReact /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "Python", icon: "🐍" },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "MySQL", icon: <SiMysql /> },
      ],
    },
  ];

  const row2 = [
    {
      title: "Auth & APIs",
      skills: [
        { name: "REST APIs", icon: "🔗" },
        { name: "JWT Auth", icon: "🔐" },
      ],
    },
    {
      title: "AI Integration",
      skills: [
        { name: "OpenAI API", icon: <SiOpenai /> },
        { name: "Gemini API", icon: <SiGooglegemini /> },
        { name: "Prompt Eng.", icon: "✨" },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "Postman", icon: <SiPostman /> },
        { name: "Vercel", icon: <SiVercel /> },
        { name: "Render", icon: <SiRender /> },
      ],
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 className="skills-title">My Skills</h2>

        <motion.div
          className="skills-row"
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {row1.map((category, index) => (
            <div className="category-card" key={index}>
              <h3>{category.title}</h3>

              <div className="skills-list">
                {category.skills.map((skill, i) => (
                  <span className="skill-badge" key={i}>
                    {skill.icon}
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="skills-row"
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {row2.map((category, index) => (
            <div className="category-card" key={index}>
              <h3>{category.title}</h3>

              <div className="skills-list">
                {category.skills.map((skill, i) => (
                  <span className="skill-badge" key={i}>
                    {skill.icon}
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;