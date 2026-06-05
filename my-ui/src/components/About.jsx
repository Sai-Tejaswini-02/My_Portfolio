import { motion } from "framer-motion";
import "./About.css";

function About() {
  return (
    <section id="about" className="about-section">


     <div className="corner-tag"></div>


  <motion.div
    className="about-container"
    initial={{ opacity: 0, x: -60 }}
    whileInView={{ opacity: 1, x: -1 }}
    transition={{ duration: 0.7 }}
  >

        {/* TITLE */}
        <h2 className="about-title">
          About Me
        </h2>

        {/* PROFESSIONAL SUMMARY */}
        <p className="about-text">
          Entry-level MERN Stack Developer with hands-on experience building 
          full-stack web applications using React, Node.js, Express, and MongoDB.
           Skilled in developing REST APIs, implementing JWT authentication, and creating
            responsive user interfaces.
          <br /><br />

        Worked on projects involving AI integrations, secure authentication systems, 
        and scalable backend architectures. Passionate about writing clean,
         maintainable code and continuously learning modern web technologies.
          <br /><br />

        </p>

        {/* KEY HIGHLIGHT BOX (optional UI improvement) */}
        <motion.div
          className="about-highlights"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <motion.p whileHover={{ y: -10 }}>
            <span className="tick-circle">✓</span>
            Full-Stack Development (MERN)</motion.p>
          <motion.p whileHover={{ y: -10 }}>
            <span className="tick-circle">✓</span>
            JWT Authentication & REST APIs</motion.p>
          <motion.p whileHover={{ y: -10 }}>
            <span className="tick-circle">✓</span>
            AI Integration (Gemini / OpenAI)</motion.p>
          <motion.p whileHover={{ y: -10 }}>
            <span className="tick-circle">✓</span>
            Responsive UI & Modern Web Design</motion.p>
        </motion.div>

        

      </motion.div>

    </section>
  );
}

export default About;