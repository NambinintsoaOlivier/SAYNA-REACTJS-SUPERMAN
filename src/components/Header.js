import React from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";
import facebook from "../styles/Assets/icones/facebook.png";
import instagram from "../styles/Assets/icones/instagram.png";
import twitter from "../styles/Assets/icones/twitter.png";

const Header = ({ titre, imgHeader }) => {
  return (
    <div className="container-fluid">
      <img src={imgHeader} className="bgHeader" alt="imgHeader" />
      <div className="contenuHeader">
        <div className="row w-100 text-white h-25">
          <div className="col-md-3 w-0 d-flex flex-column justify-content-around align-items-center ">
            <Link>
              <img src={facebook} alt="facebook" />
            </Link>
            <Link>
              <img src={instagram} alt="instagram" />
            </Link>
            <Link>
              <img src={twitter} alt="twitter" />
            </Link>
          </div>
          {titre}
        </div>
      </div>
    </div>
  );
};

export default Header;
