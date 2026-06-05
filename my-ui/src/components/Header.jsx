import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useEffect, useState } from "react";

import "./Header.css";

const initialOrder = [
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
];

function shuffle([...array]) {
  return array.sort(() => Math.random() - 0.5);
}

function Header() {
  const [order, setOrder] = useState(initialOrder);

useEffect(() => {
  const interval = setInterval(() => {
    setOrder((prev) => shuffle([...prev]));
  }, 5000);

  return () => clearInterval(interval);
}, []);


  return (
    <section id="home" className="header">

      {/* LEFT SIDE */}
      <div className="header-left">

        <motion.p
          className="header-greeting"
         initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          👋 Hello, I'm
        </motion.p>

        <motion.h1
          className="header-title"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <TypeAnimation
            sequence={[
              "Pola Sai Tejaswini",
              1000,
            ]}
            speed={50}
            cursor={false}
            repeat={0}
        />
        </motion.h1>

        <motion.h2
          className="header-role"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          MERN Stack Developer • AI Enthusiast
        </motion.h2>

        <motion.p
          className="header-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Building responsive web applications, integrating modern APIs,
          and exploring AI-powered solutions through clean and scalable code.
        </motion.p>

        {/* BUTTON */}
        <div className="header-buttons">
          <motion.button
            className="primary-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              document.getElementById("projects")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Explore Projects
          </motion.button>
        </div>

        {/* STATS */}
        <div className="header-stats">

          <motion.div
            className="stat-card"
            whileHover={{ y: -5 }}
          >
            <h3>2+</h3>
            <p>Projects</p>
          </motion.div>

          <motion.div
            className="stat-card"
            whileHover={{ y: -5 }}
          >
            <h3>MERN</h3>
            <p>Stack</p>
          </motion.div>

          <motion.div
            className="stat-card"
            whileHover={{ y: -5 }}
          >
            <h3>AI</h3>
            <p>Integration</p>
          </motion.div>

        </div>

      </div>
    <div className="header-right">

      <ul className="tech-showcase">

        {order.map((tech) => (
          <motion.li
            key={tech}
            layout
            transition={{
              type: "spring",
              damping: 20,
              stiffness: 300,
            }}
          >
            <button
              className="tech-card"
           
            >
              {tech}
            </button>
          </motion.li>
        ))}

      </ul>

    </div>

    </section>
  );
}

export default Header;