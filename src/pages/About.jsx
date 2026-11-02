import React from "react";
import { FaDownload } from "react-icons/fa";

const About = () => (
  <section className="section">
    <div className="container">
      <div className="row g-5 align-items-center">
        <div className="col-md-5">
          <img
            src={`${process.env.PUBLIC_URL}/tashini.jpg`}
            alt="Tashini Hendahewa"
            className="img-fluid shadow"
            style={{ borderRadius: 24, width: "100%", maxHeight: 520, objectFit: "cover" }}
          />
        </div>
        <div className="col-md-7">
          <h2 className="section-title">About me</h2>
          <p>
            I'm a software engineer with a BEng (Hons) in Software Engineering from the University of
            Westminster. Since July 2025 I've worked at Arvutt as an Associate Software Engineer, building
            full-stack web apps, Electron desktop tools, and Power BI dashboards for clients across industries.
          </p>
          <p>
            Before that, I spent a year at Epic Lanka working on systems for the Parliament of Sri Lanka and
            the Paytect card platform. My final-year project, FabricGuard, applied machine learning to
            fabric defect detection.
          </p>
          <p className="muted">
            I like clear code, reliable databases, and software that solves a real problem for the person using it.
          </p>
          <div className="d-flex gap-3 mt-4">
            <a href={`${process.env.PUBLIC_URL}/Tashini_Hendahewa_CV_261028.pdf`} className="btn btn-accent" target="_blank" rel="noopener noreferrer">
              View resume
            </a>
            <a
              href={`${process.env.PUBLIC_URL}/Tashini_Hendahewa_CV_261028.pdf`}
              className="btn btn-ghost d-flex align-items-center gap-2"
              download
              aria-label="Download resume"
            >
              <FaDownload /> Download
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;