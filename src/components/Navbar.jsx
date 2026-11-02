import React from "react";
import { NavLink, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const links = [
  ["/", "Home"],
  ["/about", "About"],
  ["/experience", "Experience"],
  ["/projects", "Projects"],
  ["/skills", "Skills"],
  ["/contact", "Contact"],
];

const Navbar = () => (
  <nav className="navbar navbar-expand-lg sticky-top site-nav">
    <div className="container">
      <Link className="brand" to="/">Tashini H.</Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          {links.map(([to, label]) => (
            <li className="nav-item" key={to}>
              <NavLink end className="nav-link" to={to}>{label}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;