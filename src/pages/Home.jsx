import React from "react";
import { HashRouter  as Link } from "react-router-dom";


const Home = () => {
  return (
    <section className="text-center py-5" data-aos="fade-up">
      <div className="container">
        <h1 className="display-4">Hi, I'm Hendahewa Tashini Maleesha Weerakoon</h1>
        <p className="lead">Software Engineer | ML Researcher | Fullstack Developer</p>
        <p>
          Passionate about building smart, scalable solutions that bridge the gap between research and real-world applications.
        </p>
        <Link to="/about" className="btn btn-primary btn-lg mt-3">Learn More About Me</Link>
      </div>
    </section>
  );
};

export default Home;
