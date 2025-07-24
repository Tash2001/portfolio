import React from "react";
import { FaDownload } from "react-icons/fa";

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
              style={{ maxWidth: "100%", height: "auto", maxHeight: "600px", objectFit: "cover" }}
            />
          </div>
          <div className="col-md-6">
            <p>
              I'm Tashini Maleesha Weerakoon, a dedicated and enthusiastic Software Engineering graduate with a strong passion for building impactful digital solutions. I’ve recently completed all academic and final project requirements for my BSc (Hons) in Software Engineering, and I’m now eagerly awaiting graduation. Over the past few years, I’ve developed diverse technical skills in full-stack web development, machine learning, microservice architecture, and cloud-based application deployment. From university research to industry-level systems, I’ve turned ideas into functional, scalable software that solves real-world problems.
            </p>
            <p>
              My goal is to create scalable, user-friendly applications that deliver value. I’m a quick learner who enjoys experimenting with new technologies and always strives to improve.
            </p>
            <div className="d-flex gap-3 mt-3">
              <a
                href={`${process.env.PUBLIC_URL}/Tashini Hendahewa.pdf`}
                className="btn btn-outline-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>

              <a
                href={`${process.env.PUBLIC_URL}/Tashini Hendahewa.pdf`}
                className="btn btn-outline-primary d-flex justify-content-center align-items-center"
                style={{ width: "44px", height: "44px" }}
                download
              >
                <FaDownload />
              </a>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
