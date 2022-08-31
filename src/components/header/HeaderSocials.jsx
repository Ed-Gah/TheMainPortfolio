import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/edwin-gah-97b889213">
        <BsLinkedin />
      </a>
      <a href="https://github.com/Ed-Gah">
        <BsGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
