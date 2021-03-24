import React from "react";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark ">
      <a className="navbar-brand text-light" href="/">
        Movie App
      </a>
      <button
        className="navbar-toggler text-light"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon "></span>
      </button>
      <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link to="/login">
            <a
              id="anchor"
              href="./Login.jsx"
              className="nav-item nav-link active text-light"
            >
              Home <span className="sr-only">(current)</span>
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
