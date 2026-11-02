import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <section className="hero">
    <div className="container">
      <div className="row align-items-center g-5">
        <div className="col-lg-7 hero-copy">
          <span className="status-chip">Associate Software Engineer at Arvutt</span>
          <h1 className="mt-4 mb-3">Hi, I'm Tashini. I build software people actually use.</h1>
          <p className="role">Full-stack developer · Power BI · Machine learning</p>
          <p className="muted" style={{ maxWidth: "56ch" }}>
            I build web and desktop applications for government, finance, and business teams with React,
            Spring Boot, Node.js, and FastAPI, and I turn raw data into dashboards people can act on.
          </p>
          <div className="d-flex gap-3 flex-wrap mt-4">
            <Link to="/projects" className="btn btn-accent">See my projects</Link>
            <Link to="/contact" className="btn btn-ghost">Get in touch</Link>
          </div>
          <div className="hero-stats">
            <div><strong>2+ year</strong><span>professional experience</span></div>
            <div><strong>11+</strong><span>projects built</span></div>
            <div><strong>BEng (Hons)</strong><span>University of Westminster</span></div>
          </div>
        </div>
        <div className="col-lg-5 text-center">
          <img src={`${process.env.PUBLIC_URL}/tashini.jpg`} alt="Tashini Hendahewa" className="hero-photo" />
        </div>
      </div>
    </div>
  </section>
);

export default Home;