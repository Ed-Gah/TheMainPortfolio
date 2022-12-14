import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward, FaUsers, FaFolderOpen } from "react-icons/fa";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2 Years Working</small>
            </article>
            <article className="about__card">
              <FaUsers className="about__icon" />
              <h5>Clients</h5>
              <small>20+ Worldwide</small>
            </article>
            <article className="about__card">
              <FaFolderOpen className="about__icon" />
              <h5>Projects</h5>
              <small>15+ completed</small>
            </article>
          </div>
          <p>
            Solution-oriented and problem solver with 2 year1 experience in building
            and maintaining sofware and software architecture. Highly skilled in
            communication, collaboration, and technical documentation.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
