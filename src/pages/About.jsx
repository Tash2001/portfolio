import React from "react";

const About = () => {
  return (
    <section className="py-5" data-aos="fade-up">
      <div className="container">
        <h2 className="text-center mb-4">About Me</h2>
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <img
              src="./tashini.jpg"
              alt="Profile"
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-md-6">
            <p>
              I'm Tashini Weerakoon, a final-year Software Engineering student passionate about full-stack development, machine learning, and solving real-world problems through technology. I’ve worked on diverse projects from AI-powered quality inspection systems and microservice-based blogging platforms.
            </p>
            <p>
              My goal is to create scalable, user-friendly applications that deliver value. I’m a quick learner who enjoys experimenting with new technologies and always strives to improve.
            </p>
            <a
              href={`${process.env.PUBLIC_URL}/tashini weerakoon CV.pdf`}
              className="btn btn-outline-primary mt-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
