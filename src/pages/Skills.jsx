import React from "react";

const skillCategories = {
  "Languages": ["JavaScript", "Python", "Java", "SQL"],
  "Frontend": ["React.js", "HTML5", "CSS3", "Bootstrap"],
  "Backend": ["Node.js", "Express.js", "FastAPI", "Spring Boot"],
  "Databases": ["PostgreSQL", "SQLite", "MySQL", "Oracle", "MongoDB"],
  "Tools & Platforms": ["Git", "GitHub", "Docker", "Render", "JIRA", "GitLab"],
  "Machine Learning": ["TensorFlow", "Keras", "OpenCV", "Scikit-learn"]
};

const Skills = () => {
  return (
    <section className="py-5" data-aos="fade-up">
      <div className="container">
        <h2 className="text-center mb-4">Skills</h2>
        <div className="row">
          {Object.entries(skillCategories).map(([category, skills], idx) => (
            <div className="col-md-4 mb-4" key={idx}>
              <div className="bg-light rounded p-3 shadow-sm h-100">
                <h5 className="mb-3">{category}</h5>
                {skills.map((skill, i) => (
                  <span key={i} className="badge bg-primary m-1">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
