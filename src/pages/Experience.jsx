import React from "react";

const experiences = [
  {
    role: "Associate Software Engineer",
    company: "Arvutt Pvt. Ltd",
    time: "July 2025 – Present",
    points: [
      "Build full-stack web and desktop applications with React.js, Spring Boot, Electron.js, and FastAPI.",
      "Design SQL databases, and test and debug features to keep applications reliable.",
      "Transform raw transactional data into star-schema models with MySQL and Power Query, then build Power BI dashboards.",
    ],
    projects: [
      ["Inventory and Order Management System", "React.js,NodeJS, and PostgreSQL platform that automates stock management, supplier tracking, and invoice generation."],
      ["Labor Tracker", "Designed a value added services labor tracker using React.js and FastAPI log high-value secondary processing tasks."],
      ["Warehouse Pick & Efficiency Tracker", "Developed a performance monitoring system using React.js , Spring Boot and MySQL to track pick rates and to monitor item movement efficiency. "],
      ["Client Dashboards", "Logistics, Customer Acknowledgment, and SLA dashboards in Power BI and SQL."]
    ],
  },
  {
    role: "Software Engineering Intern",
    company: "Epic Lanka Pvt. Ltd",
    time: "July 2023 – July 2024",
    points: [
      "Worked on enterprise systems for the government and financial sectors in agile teams.",
    ],
    projects: [
      ["Document Management System, Parliament of Sri Lanka", "Secure document storage and retrieval with React TypeScript and Spring Boot."],
      ["Card Management System, Paytect", "Card application, personalization, and fraud detection modules using React.js, Spring Boot microservices, and Oracle."],
    ],
  },
  {
    role: "Full-stack Developer & ML Engineer",
    company: "Final-year research project, FabricGuard",
    time: "2024 – 2025",
    points: [
      "Built an AI fabric defect detection system with EfficientNetB3, SE blocks, and handcrafted texture features, served through FastAPI and a PWA.",
    ],
    projects: [],
  },
];

const Experience = () => (
  <section className="section">
    <div className="container" style={{ maxWidth: 860 }}>
      <h2 className="section-title">Experience</h2>
      <p className="section-sub">Where I've worked and what I've shipped.</p>
      <div className="timeline">
        {experiences.map((e) => (
          <div className="t-item" key={e.role + e.company}>
            <div className="t-date">{e.time}</div>
            <h3 className="h5 mb-0">{e.role}</h3>
            <p className="muted mb-2">{e.company}</p>
            <ul>{e.points.map((p) => <li key={p}>{p}</li>)}</ul>
            {e.projects.length > 0 && (
              <div className="panel mt-3">
                <strong>Key projects</strong>
                <ul className="mt-2">
                  {e.projects.map(([t, d]) => (
                    <li key={t} className="mb-1"><strong>{t}:</strong> {d}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;