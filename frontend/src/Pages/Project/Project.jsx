import React from 'react';
import './Project.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: "Portfolio Website",
    description: "A Portfolio Website using React is a dynamic and interactive web application designed to showcase an individual's personal and professional profile. ",
    tech: ["React", "CSS", "React-Router", "JavaScript","React-Icons"],
    github: "https://github.com/Nitish161026/portfolio-final-code",
    demo: "https://yourportfolio.com",
  },
  {
    title: "Food Delivery Website",
    description: "A Food Delivery Website with Admin Panel is a full-featured web application that allows users to view menus, place orders, track deliveries and make payment.",
    tech: ["React", "CSS", "Javascript", "NodeJs" , "ExpressJs" , "Mongodb" , "Stripe" , "API"],
    github: "https://github.com/Nitish161026/Food-Del-Website/tree/my-new-branch",
    demo: "https://todo-demo.com",
  },
  {
    title: "Job Portal Website",
    description: "A Job Portal Website is a web application that connects job seekers with employers, allowing users to search for jobs, post job listings, and manage applications.",
    tech: ["Javascript","React", "Tailwind CSS", "Express JS", "MongoDB" ,"Node JS","API", "Bootstrap"],
    github: "https://github.com/Nitish161026/Jobportal",
    demo: "https://weather-demo.com",
  },
  {
    title: "Bookstore Website",
    description: "A Bookstore Website is an online platform that allows users to browse, search, and purchase books and there is admin panel also.",
    tech: ["Javascript","React","Tailwind CSS", "API", "Bootstrap"," Node JS" , "Express JS", "MongoDB"],
    github: "https://github.com/Nitish161026/Bookstore",
    demo: "https://weather-demo.com",
  },
  {
    title: "YouTube Clone",
    description: "A YouTube Clone (Frontend Only) is a web application that mimics the user interface and core browsing features of YouTube. It allows users to play video because it uses YouTube API.",
    tech: ["Javascript","ReactJS", "API", "CSS"],
    github: "https://github.com/Nitish161026/Frontend-YouTube-clone",
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
