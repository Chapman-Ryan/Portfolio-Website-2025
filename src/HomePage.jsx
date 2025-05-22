import React from "react";
import "./HomePage.css"; // You can style the components as you like

const HomePage = () => {
  return (
    <div className="homepage-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-banner">
          {/* Replace with your banner image */}
          <img
            src="https://via.placeholder.com/1200x400?text=Banner+Image"
            alt="Banner"
            className="banner-image"
          />
          <div className="hero-overlay">
            <h1>Welcome to My Portfolio</h1>
            <p>Showcasing my work, skills, and passion</p>
          </div>
        </div>
      </section>

      {/* 3 Column Info Section */}
      <section className="info-section">
        <div className="info-columns">
          <div className="info-column">
            <h2>About Me</h2>
            <p>
              Brief introduction about yourself. Highlight your background, expertise, and what drives you.
            </p>
          </div>
          <div className="info-column">
            <h2>Skills</h2>
            <p>
              List your main skills or areas of expertise. For example: Web Development, Design, Project Management, etc.
            </p>
          </div>
          <div className="info-column">
            <h2>Contact</h2>
            <p>
              How can people reach you? Email, LinkedIn, or a simple contact form.
            </p>
          </div>
        </div>
      </section>

      {/* Projects/Portfolio Section */}
      <section className="projects-section">
        <h2>Featured Projects</h2>
        <div className="projects-list">
          <div className="project-card">
            <h3>Project One</h3>
            <p>Short description of a project you are proud of.</p>
          </div>
          <div className="project-card">
            <h3>Project Two</h3>
            <p>Short description of another project.</p>
          </div>
          <div className="project-card">
            <h3>Project Three</h3>
            <p>Short description of a third project.</p>
          </div>
        </div>
      </section>

      {/* Call To Action / Footer Section */}
      <section className="cta-footer-section">
        <div className="cta-content">
          <h2>Interested in working together?</h2>
          <p>Let's connect and create something amazing!</p>
          <a href="mailto:your.email@example.com" className="cta-button">Contact Me</a>
        </div>
        <footer>
          <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </footer>
      </section>
    </div>
  );
};

export default HomePage;
