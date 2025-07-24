import React from "react";

const projects = [
  {
    title: "FabricGuard – Fabric Quality Assessment System",
    description:
      "AI-based system for fabric defect detection and texture classification using EfficientNetB3, SE blocks, and handcrafted texture features. Built a FastAPI backend with real-time inference and a responsive PWA frontend.",
    tech: "FastAPI, React, TensorFlow, PostgreSQL",
    link: "https://drive.google.com/file/d/1ZC26yDKYXb44xADrMMlfB8dahYTQ9sRf/view?usp=sharing",
  },
  {
    title: "Beam Load Analyzer",
    description:
      "Mobile app that scans hand-drawn beam diagrams and performs structural load analysis using image processing. Built with Flutter frontend and Python backend.",
    tech: "Flutter, Firebase, Python",
    link: "#",
  },
  {
    title: "Inventory and Billing System",
    description:
      "Created a local inventory and billing management system with secure data handling and invoicing.",
    tech: "Node.js, Express.js, SQLite",
    link: "https://github.com/Tash2001/Nandana-Paint-House.git",
  },
  {
    title: "RestCountries Middleware API System",
    description:
      "Secure Node.js middleware layer that interfaces with the RestCountries API. Features JWT auth and admin-level API key management. Dockerized and backed by SQLite.",
    tech: "Node.js, Express.js, SQLite, Docker, JWT",
    link: "https://github.com/Tash2001/Advanced-Server-Side-CW-w1898910.git",
  },
  {
    title: "TravelTales – Microservices Blogging Platform",
    description:
      "Full-stack blog platform for posting travel stories tagged with country data. Supports likes, comments, follows, and Dockerized microservices.",
    tech: "Node.js, Express.js, SQLite, Docker, JWT",
    link: "https://github.com/Tash2001/Advanced-Server-Side-CW-w1898910.git",
  },
  {
    title: "Merchant Management System",
    description:
      "Web app to manage merchants with registration, login, and full CRUD operations. Integrated with MySQL and REST APIs.",
    tech: "Spring Boot, Angular, MySQL",
    link: "https://github.com/Tash2001/Merchant-Management.git",
  },
  {
    title: "Student Management System",
    description:
      "Web-based system for managing student data, course registration, and academic records with a Spring Boot backend.",
    tech: "Spring Boot, JSP, MySQL",
    link: "https://github.com/Tash2001/Student-s-Progress-Predicting-System.git",
  },
  {
    title: "Skin Consultation Center Management",
    description:
      "Java Swing desktop application for handling appointments, schedules, and consultations in a skin care center.",
    tech: "Java, Swing",
    link: "https://github.com/Tash2001/Skin-Consultation-Center-Management-System.git",
  },
  {
    title: "Fuel Queue Management System",
    description:
      "JavaFX desktop software for managing vehicle queues and fuel station workflows.",
    tech: "Java, JavaFX",
    link: "https://github.com/Tash2001/Fuel_Center.git",
  },
  {
    title: "MIDNIGHT – Band Website",
    description:
      "Static website for a fictional band with sections for music, member profiles, and event updates.",
    tech: "HTML, CSS, JavaScript",
    link: "https://github.com/Tash2001/MIDNIGHT.git",
  },
  {
    title: "Student Progress Predicting System",
    description:
      "Python-based prediction system using historical academic data and basic machine learning techniques.",
    tech: "Python",
    link: "https://github.com/Tash2001/Student-s-Progress-Predicting-System.git",
  },
];

const Projects = () => {
  return (
    <section className="py-5" data-aos="fade-up">
      <div className="container">
        <h2 className="text-center mb-4">Projects</h2>
        <div className="row">
          {projects.map((project, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card h-100 shadow-sm">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <p className="text-muted mt-auto">
                    <small>{project.tech}</small>
                  </p>
                </div>
                <div className="card-footer bg-transparent border-top-0">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary w-100"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
