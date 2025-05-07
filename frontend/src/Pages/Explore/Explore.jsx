import React from "react";
import "./Explore.css";

export default function Explore() {
  const skills = [
    "Photography",
    "Public Speaking",
    "Team Leadership",
    "Painting",
    "Content Writing",
    "Video Editing",
    "Event Management",
    "Presentation Design",
    "Creative Writing",
  ];

  const documents = [
    {
      name: "Business Development Resume",
      link: "/docs/leadership-certificate.pdf"
    },
    {
      name: "Photography Portfolio",
      link: "/docs/photography-portfolio.pdf"
    },
    {
      name: "Workshop Report",
      link: "/docs/workshop-report.pdf"
    }
  ];

  return (
    <div className="explore-container">
      <div className="explore-inner">
        <header className="explore-header">
          <h1>Explore My World Beyond Tech</h1>
          <p>Here are a few non-tech skills and accomplishments I'm proud of.</p>
        </header>

        <section className="skill-section">
          <h2>Creative & Soft Skills</h2>
          <div className="skill-grid">
            {skills.map((skill, idx) => (
              <div key={idx} className="skill-card">{skill}</div>
            ))}
          </div>
        </section>

        <section className="pdf-section">
          <h2>Supporting Documents</h2>
          <ul className="pdf-list">
            {documents.map((doc, idx) => (
              <li key={idx}>
                <a href={doc.link} target="_blank" rel="noopener noreferrer" className="pdf-link">
                  📄 {doc.name}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}