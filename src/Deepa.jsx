import React from "react";
import { motion } from "framer-motion";
import "./Deepa.css";
import profilePic from "./profile.jpg";

const Deepa = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Hi, I'm <span className="highlight">Deepa Dhandapani</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            A Passionate Frontend Developer
          </motion.p>
          <motion.button
            className="cta-button"
            onClick={() => {
              const projectsSection = document.getElementById("projects");
              if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            View Projects
          </motion.button>
        </motion.div>
        <motion.div
          className="hero-image"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          <img src={profilePic} alt="Deepa Dhandapani" />
        </motion.div>
      </div>
    </section>
  );
};

export default Deepa;
