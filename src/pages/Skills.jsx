import React from "react";

const skillCategories = {
  Languages: ["Java", "Python", "JavaScript", "TypeScript", "PHP", "R", "SQL"],
  Frontend: ["React", "Angular", "JSP", "jQuery", "Bootstrap", "HTML5", "CSS3"],
  Backend: ["Spring Boot", "Spring MVC", "Node.js", "Express.js", "FastAPI"],
  Databases: ["MySQL", "PostgreSQL", "Oracle", "SQLite", "MongoDB", "Firebase"],
  "Data & BI": ["Power BI", "Power Query", "Star-schema modelling", "Excel"],
  "Tools & DevOps": ["Docker", "Git", "GitHub", "Jira", "REST APIs", "Microservices", "Electron.js", "Render"],
  "Machine learning": ["TensorFlow", "Keras", "OpenCV", "Scikit-learn"],
};

const Skills = () => (
  <section className="section">
    <div className="container">
      <h2 className="section-title">Skills</h2>
      <p className="section-sub">The tools I use day to day, grouped by what they're for.</p>
      <div className="row g-4">
        {Object.entries(skillCategories).map(([category, skills]) => (
          <div className="col-md-6 col-lg-4" key={category}>
            <div className="panel skill-group">
              <h3>{category}</h3>
              {skills.map((s) => (
                <span className="tag" key={s}>{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;