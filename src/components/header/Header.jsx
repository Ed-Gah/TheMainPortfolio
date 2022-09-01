import React from "react";
import CTA from "../CTA";
import "./header.css";
import { BsChevronDoubleDown } from "react-icons/bs";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I am</h5>
        <h1>CHU EDWIN GAH</h1>
        <h5 className="text-light">Front End Developer</h5>
        <CTA />

        <div className="me">
          <img src={ME} alt="" />
        </div>
        <div className="header__social__scroll">
          <a href="#contact" className="scroll__down">
            Scroll down
          <BsChevronDoubleDown className="header__down__arrow" />
          </a>
          <HeaderSocials />
        </div>
      </div>
    </header>
  );
};

export default Header;
