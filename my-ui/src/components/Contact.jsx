import { useState } from "react";
import { motion } from "framer-motion";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaLinkedin, FaGithub, FaPaperPlane } from "react-icons/fa";
import "./Contact.css";

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState("");

  const handleSubmit = () => {
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("saiteja.pola2002@gmail.com");
    setCopied("📧 Email copied!");

    setTimeout(() => {
      setCopied("");
    }, 4000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText("+91 6300415128");
    setCopied("📞 Phone number copied!");

    setTimeout(() => {
      setCopied("");
    }, 4000);
  };

  return (
    <section id="contact" className="contact-section">
      <motion.div
        className="contact-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="contact-heading">Contact</h2>

        <div className="contact-content">
          {/* Left Side */}
          <div className="contact-left">
            <h2 className="contact-title">Get In Touch</h2>

            <p className="contact-text">
              I'm actively seeking opportunities in Frontend and MERN Stack
              Development. If you'd like to collaborate, discuss a role, or
              simply connect, feel free to get in touch.
            </p>

            <motion.button
              className="submit-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSubmit}
            >
              <FaPaperPlane />
              Let's Connect
            </motion.button>

            {submitted && (
              <p className="success-message">
                Open to Frontend and MERN Stack Developer opportunities.
              </p>
            )}

            {copied && (
              <p className="copy-message">
                {copied}
              </p>
            )}
          </div>

          {/* Right Side */}
          <div className="contact-details">

            <div className="contact-item" onClick={copyEmail}>
              <MdEmail />
              <span>saiteja.pola2002@gmail.com</span>
            </div>

            <div className="contact-item" onClick={copyPhone}>
              <IoCall />
              <span>+91 63004 15128</span>
            </div>

            <div className="contact-item">
              <FaGithub />
              <a
                href="https://github.com/Sai-Tejaswini-02"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>

            <div className="contact-item">
              <FaLinkedin />
              <a
                href="https://www.linkedin.com/in/pola-tejaswini/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>

          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
