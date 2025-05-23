import React from "react";

const projects = [
  {
    title: "FabricGuard – Fabric Quality Assessment System",
    description:
      "AI-powered system for detecting fabric defects and analyzing texture using EfficientNetB3 and handcrafted features. Features real-time FastAPI backend and PWA frontend.",
    tech: "React, FastAPI, TensorFlow, PostgreSQL",
    image: "./projects/fabricguard.png",
    link: "https://github.com/Tash2001/FabricGuard--Fabric-Quality-Assessment.git"
  },
  {
    title: "TravelTales – Microservices Blogging Platform",
    description:
      "Built with Node.js and React, supports posting, liking, following, and pagination with Dockerized microservices.",
    tech: "Node.js, React, SQLite, Docker",
    image: "./projects/travelTales.png",
    link: "https://github.com/Tash2001/Advanced-Server-Side-CW-w1898910.git"
  }
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
                <img
                  src={project.image}
                  className="card-img-top"
                  alt={project.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <p className="text-muted"><small>{project.tech}</small></p>
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
