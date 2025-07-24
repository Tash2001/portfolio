import React from "react";

const experiences = [
  {
    role: "Software Engineering Intern",
    company: "Epic Lanka",
    time: "July 2023 – July 2024",
    summary:
      "Worked on full-stack development of enterprise-grade systems for government and finance sectors in agile teams.",
    projects: [
      {
        title: "Document Management System – Parliament of Sri Lanka",
        details:
          "Built a secure system for document storage and retrieval using React TypeScript for the frontend and Spring Boot for backend services. Integrated SQL databases via Workbench.",
      },
      {
        title: "Card Management System – Paytect",
        details:
          "Developed modules for card issuing, fraud detection, and personalization using React.js, Spring Boot microservices, and Oracle DB. Participated in agile sprints with Jira.",
      },
    ],
  },
  {
    role: "Full-stack Developer & ML Engineer",
    company: "University Research Project – FabricGuard",
    time: "Nov 2024 – Apr 2025",
    summary:
      "Led a research project on automated fabric defect detection and texture analysis using AI and handcrafted features.",
    projects: [
      {
        title: "FabricGuard – AI-based Fabric Quality Assessment System",
        details:
          "Built using EfficientNetB3, SE attention, and handcrafted texture features. Integrated a FastAPI backend with PostgreSQL and deployed as a responsive PWA.",
      },
      {
        title: "Real-time Inference & Reporting",
        details:
          "Enabled live quality checks and auto-generated reports for industrial fabric inspection using machine learning and backend APIs.",
      },
    ],
  },
];

const Experience = () => {
  return (
    <section className="py-5 bg-light" data-aos="fade-up">
      <div className="container">
        <h2 className="text-center mb-5">Experience & Research</h2>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="position-relative ps-4 mb-5 border-start border-4 border-primary"
            >
              <span className="badge bg-primary mb-2">{exp.time}</span>
              <h5 className="fw-bold mb-1">{exp.role}</h5>
              <p className="mb-1 text-muted">{exp.company}</p>
              <p>{exp.summary}</p>

              <ul className="mt-3">
                {exp.projects.map((project, i) => (
                  <li key={i} className="mb-2">
                    <strong>{project.title}:</strong> {project.details}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
