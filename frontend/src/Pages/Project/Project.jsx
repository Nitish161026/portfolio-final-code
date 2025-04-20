import React from 'react';
import './Project.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: "Portfolio Website",
    description: "Personal portfolio built with React, showcasing skills and projects.",
    tech: ["React", "CSS", "EmailJS"],
    github: "https://github.com/yourgithub/portfolio",
    demo: "https://yourportfolio.com",
  },
  {
    title: "Food Delivery Website",
    description: "A simple yet powerful todo app with filters and dark mode.",
    tech: ["React", "CSS", "Javascript", "NodeJs" , "ExpressJs" , "Mongodb" , "LocalStorage"],
    github: "https://github.com/yourgithub/todo-app",
    demo: "https://todo-demo.com",
  },
  {
    title: "Weather App",
    description: "Live weather updates using OpenWeatherMap API.",
    tech: ["React", "API", "Bootstrap"],
    github: "https://github.com/yourgithub/weather-app",
    demo: "https://weather-demo.com",
  },
  {
    title: "Weather App",
    description: "Live weather updates using OpenWeatherMap API.",
    tech: ["React", "API", "Bootstrap"],
    github: "https://github.com/yourgithub/weather-app",
    demo: "https://weather-demo.com",
  },
  {
    title: "Weather App",
    description: "Live weather updates using OpenWeatherMap API.",
    tech: ["React", "API", "Bootstrap"],
    github: "https://github.com/yourgithub/weather-app",
    demo: "https://weather-demo.com",
  },
  {
    title: "Weather App",
    description: "Live weather updates using OpenWeatherMap API.",
    tech: ["React", "API", "Bootstrap"],
    github: "https://github.com/yourgithub/weather-app",
    demo: "https://weather-demo.com",
  },
  {
    title: "Weather App",
    description: "Live weather updates using OpenWeatherMap API.",
    tech: ["React", "API", "Bootstrap"],
    github: "https://github.com/yourgithub/weather-app",
    demo: "https://weather-demo.com",
  },
  {
    title: "Weather App",
    description: "Live weather updates using OpenWeatherMap API.",
    tech: ["React", "API", "Bootstrap"],
    github: "https://github.com/yourgithub/weather-app",
    demo: "https://weather-demo.com",
  },
];

const Project = () => {
  return (
    <div className="projects-container">
      <h1 className="projects-title">🚀 My Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className="tech-tags">
              {project.tech.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noreferrer">
                <FaGithub /> Code
              </a>
              <a href={project.demo} target="_blank" rel="noreferrer">
                <FaExternalLinkAlt /> Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
