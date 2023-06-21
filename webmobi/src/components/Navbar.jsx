import React, { useState } from "react";
import { Link } from "react-router-dom";
import { menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg bg-body-white shadow ">
      <div className="container-fluid  p-2">
        <div className="d-flex align-items-center">
          <a className="nav-head-color" href="#">
            Incubyte
          </a>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex gap-3 ">
            <li className="nav-item ">
              <a className=" nav-color" href="#about">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-color" href="#expertise">
                Our Expertise
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-color" href="#success">
                Success Stories
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-color" href="#contact">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
