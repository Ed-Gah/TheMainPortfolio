import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I can offer</h5>
      <h2>Sevices</h2>
      <div className="services__container">
        <article className="service">
          <div className="service__head">
            <h3>FrontEnd Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Build responsive and sustainable mobile, crossplatform
                applications with React Native
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Build Responsive web applications with React Js</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Build responsive websites with HTML, CSS and JavaScript</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>BackEnd Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Build stable REST APIs with Express JS</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Integrate BackEnd to a NoSQL database (MongoDB) </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Integrate various APIs such as Email, payment, Messaging</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Database Administration</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Manage NoSQL databases such Mongo DB and Firebase CloudStore</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Implement Database Multitenancy</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
