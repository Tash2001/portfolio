import React, { useState } from "react";
import VideoModal from "../components/VideoModal";

const projects = [
  {
    title: "FabricGuard",
    description: "AI fabric defect detection and texture analysis using  transfer learning (EfficientNetB3 with SE Block) and handcrafted features. FastAPI backend for real-time inference and reports, with a PWA frontend.",
    tech: ["FastAPI", "React", "TensorFlow", "PostgreSQL"],
    video: "https://drive.google.com/file/d/1ZC26yDKYXb44xADrMMlfB8dahYTQ9sRf/preview",
    link: "",
  },
  {
    title: "Beam Load Analyzer",
    description: "Mobile app that scans hand-drawn beam diagrams and calculates structural loads using image processing.",
    tech: ["Flutter", "Firebase", "Python"],
    link: "",
  },
    {
    title: "Inventory and Billing System Using FastAPI",
    description: "An all-in-one business management system featuring product and inventory management, billing and invoicing, customer credit tracking, payment management, and a centralized dashboard for monitoring business operations.",
    tech: ["FastAPI", "ReactJS", "ElectronJS", "SQLite"],
    video: "https://drive.google.com/file/d/1Oh-XblCMhHQ1Iz3qt0pnvPawKhj-e8CF/preview",
    link: "",
  },
  {
    title: "RestCountries Middleware API",
    description: "Secure Node.js middleware over the RestCountries API with JWT authentication, role-based API key management, and Docker.",
    tech: ["NodeJS", "Express", "SQLite", "Docker", "JWT"],
    link: "https://github.com/Tash2001/Advanced-Server-Side-CW-w1898910.git",
  },
  {
    title: "TravelTales",
    description: "Blogging platform for travel stories tagged by country, with follows, likes, comments, and search, built as Dockerized microservices.",
    tech: ["NodeJS", "Express", "SQLite", "Docker", "JWT", "ReactJS"],
    link: "https://github.com/Tash2001/Advanced-Server-Side-CW-w1898910.git",
  },
  {
    title: "Merchant Management System",
    description: "Merchant profiles with secure login and full CRUD over REST APIs.",
    tech: ["Spring Boot", "Angular", "MySQL"],
    link: "https://github.com/Tash2001/Merchant-Management.git",
  },
  {
    title: "Student Management System",
    description: "Student records, course registration, and academic data management.",
    tech: ["Spring Boot", "JSP", "MySQL"],
    link: "https://github.com/Tash2001/Student-s-Progress-Predicting-System.git",
  },
  {
    title: "Skin Consultation Center",
    description: "Desktop app for appointments, schedules, and consultations.",
    tech: ["Java", "Swing"],
    link: "https://github.com/Tash2001/Skin-Consultation-Center-Management-System.git",
  },
  {
    title: "Fuel Queue Management",
    description: "Desktop software for managing vehicle queues at a fuel station.",
    tech: ["Java", "JavaFX"],
    link: "https://github.com/Tash2001/Fuel_Center.git",
  },
  {
    title: "Student Progress Predictor",
    description: "Predicts student outcomes from historical academic data using basic machine learning.",
    tech: ["Python"],
    link: "https://github.com/Tash2001/Student-s-Progress-Predicting-System.git",
  },
];

const Projects = () => {
  const [video, setVideo] = useState(null);
  return (
  <section className="section">
    <div className="container">
      <h2 className="section-title">Projects</h2>
      <p className="section-sub">University and personal projects. Client work from Arvutt and Epic Lanka is on the Experience page.</p>
      <div className="row g-4">
        {projects.map((p) => (
          <div className="col-md-6 col-lg-4" key={p.title}>
            <div className="panel project-card">
              <h3>{p.title}</h3>
              <p className="muted">{p.description}</p>
              <div className="mt-auto">
                <div className="mb-3">{p.tech.map((t) => <span className="tag" key={t}>{t}</span>)}</div>
                {p.video ? (
                  <button className="link-arrow btn-link-plain" onClick={() => setVideo(p)}>
                    Watch demo
                  </button>
                ) : p.link ? (
                  <a href={p.link} target="_blank" rel="noopener noreferrer" className="link-arrow">
                    View on GitHub
                  </a>
                ) : (
                  <span className="muted small">Private project</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    {video && <VideoModal src={video.video} title={`${video.title} demo`} onClose={() => setVideo(null)} />}
  </section>
  );
};

export default Projects;