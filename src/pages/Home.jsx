import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section
      data-aos="fade-up"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        height: "100vh", // Full page height
        padding: "2rem",
      }}
    >
      <div>
        <h1 className="display-4">Hi, I'm Hendahewa Tashini Maleesha Weerakoon</h1>
        <p className="lead">Software Engineer | ML Researcher | Fullstack Developer</p>
        <p>
          Passionate about building smart, scalable solutions that bridge the gap between research and real-world applications.
        </p>
        <Link to="/about" className="btn btn-primary btn-lg mt-3">
          Learn More About Me
        </Link>
      </div>
    </section>
  );
};

export default Home;
