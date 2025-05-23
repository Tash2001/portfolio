import React from "react";

const experiences = [
  {
    role: "Full-stack Developer & ML Engineer – FabricGuard",
    time: "Nov 2024 – Apr 2025",
    description:
      "Developed an AI-powered fabric quality inspection system using EfficientNetB3, SE attention, and texture features. Integrated with FastAPI backend and PostgreSQL, deployed as a PWA.",
    type: "project"
  },
  {
    role: "Backend Developer – TravelTales CW2",
    time: "Mar 2025 – Apr 2025",
    description:
      "Created a microservices-based blogging platform using Node.js, Express, and Docker. Implemented likes/dislikes, follows, and API documentation.",
    type: "coursework"
  }
];

const Experience = () => {
  return (
    <section className="py-5" data-aos="fade-up">
      <div className="container">
        <h2 className="text-center mb-4">Experience & Projects</h2>

        <div className="timeline mb-5">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-4 position-relative ps-4 border-start border-2 border-primary">
              <h5 className="fw-bold">{exp.role}</h5>
              <span className="text-muted">{exp.time}</span>
              <p className="mt-2">{exp.description}</p>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
};

export default Experience;
