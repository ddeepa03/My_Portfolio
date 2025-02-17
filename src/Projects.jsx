import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "Calculator",
    description:"A modern and responsive calculator built with HTML, CSS, and JavaScript, offering real-time calculations, keyboard support, and a seamless user experience across all devices.",
    githubLink: "https://github.com/ddeepa03/Calculator.git",
  },
  {
    title: "To-Do App",
    description: "An interactive to-do app built with HTML, CSS, and JavaScript, allowing users to add, edit, and delete tasks with ease. Features persistent task storage for seamless user experience.",
    githubLink: "https://github.com/ddeepa03/To_Do.git",
  },
  {
    title: "Quiz App",
    description: "A dynamic quiz app built with React, allowing users to answer multiple-choice questions and view their score at the end. Features state management and a smooth user interface for an engaging experience.",
    githubLink: "https://github.com/ddeepa03/Quiz_App.git",
  },
];

const Projects = () => (
  <section id="projects" className="projects">
    <h2>Projects</h2>
    <div className="project-list">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
