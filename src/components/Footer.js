import React from "react";
import logosayna from "../styles/Assets/logos/logo_1.png";
import icon_x from "../styles/Assets/logos/logo_2.png";
import icon_DC from "../styles/Assets/logos/logo_3.png";
import icon_facebook from "../styles/Assets/icones/facebook.png";
import icon_ig from "../styles/Assets/icones/instagram.png";
import icon_tw from "../styles/Assets/icones/twitter.png";
import logo_0 from "../styles/Assets/icones/logo_0.png";

const Footer = () => {
  return (
    <div className="container">
      <footer className="py-3 my-4">
        <p className="text-center text-white" style={{ fontSize: "10px" }}>
          <img src={logo_0} alt="" srcSet="" /> Ce projet respecte l'univers
          cinématique des films Batman récents. Version Nolon & Sneeder & Reever
        </p>
        <ul className="nav justify-content-center align-items-center mb-3">
          <li className="nav-item">
            <a href="/" className="nav-link px-2 ">
              <img src={logosayna} alt="" srcSet="" />
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link px-2 ">
              <img src={icon_x} alt="" srcSet="" />
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link px-2 ">
              <img src={icon_DC} alt="" />
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link px-2 ">
              <img src={icon_facebook} alt="" />
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link px-2">
              <img src={icon_ig} alt="" />
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link px-2">
              <img src={icon_tw} alt="" />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
