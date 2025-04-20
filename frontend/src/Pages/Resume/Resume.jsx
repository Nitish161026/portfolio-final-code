import React from "react";
import "./Resume.css";

export default function Resume() {
  return (
    <div className="mern-container">
      <div className="mern-inner">
        <header>
          <h1>Nitish Kumar Yadav</h1>
          <p>+91-8651179672 | nitishkumaryadav1698@gmail.com</p>
          <p>Roll No.: 2021UG2070 | nitish.2021ug2070@iiitranchi.ac.in</p>
          <p>B.Tech, Electronics and Communication Engineering</p>
          <p>IIIT Ranchi</p>
          <div className="links">
            <a href="https://github.com/Shivansh161026" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/nitish-kumar-yadav-5b117a303" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </header>

        <section>
          <h2>Education</h2>
          <p><strong>IIIT Ranchi</strong> (2021-2025)<br />
          B.Tech in ECE | CGPA: 7.72</p>
        </section>

        <section>
          <h2>Technical Skills and Interests</h2>
          <div className="skills-box">
            <div>C</div>
            <div>C++</div>
            <div>Python</div>
            <div>JavaScript</div>
            <div>Node.js</div>
            <div>Express.js</div>
            <div>HTML</div>
            <div>CSS</div>
            <div>React.js</div>
            <div>Git</div>
            <div>GitHub</div>
            <div>VS Code</div>
            <div>MS Office</div>
            <div>MongoDB</div>
            <div>MySQL</div>
            <div>Collaboration</div>
            <div>Adaptability</div>
            <div>Empathy</div>
            <div>Web Development</div>
            <div>DSA</div>
          </div>
        </section>

        <section>
          <h2>Personal Projects</h2>
          <div className="project">
            <h3>Food Delivery App</h3>
            <p>Full-stack app with MERN, Stripe integration, and admin panel for orders.</p>
          </div>
          <div className="project">
            <h3>Online Bookstore App</h3>
            <p>User-friendly MERN bookstore with search, recommendations, and payments.</p>
          </div>
          <div className="project">
            <h3>Online Job Platform</h3>
            <p>MERN job portal with recruiter/admin panels, job filters, and auth system.</p>
          </div>
        </section>

        <section>
          <h2>Achievements</h2>
          <ul>
            <li>Participated in GDSC Hackathon showcasing collaboration and development skills</li>
            <li>Solved 500+ DSA problems on GeeksforGeeks, LeetCode, CodeChef</li>
            <li>Led successful group project development</li>
            <li>Designed solutions for college presentations</li>
          </ul>
        </section>

        <div className="resume-button-container">
          <a
            href="/NKY.pdf"
            className="resume-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Full Resume (PDF)
          </a>
        </div>
      </div>
    </div>
  );
}
