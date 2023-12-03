import React from "react";
import "../styles/NavBar.css";
import { Link, NavLink } from "react-router-dom";
import logoNav from "../styles/Assets/logos/logo_blanc.png";

const NavBar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-sm navbar-dark bg-transparant"
        aria-label="Third navbar example"
      >
        <div className="container d-flex">
          <Link to={"/"} className="navbar-brand ">
            <img src={logoNav} className="logoNav" alt="" srcSet="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample03"
            aria-controls="navbarsExample03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse navbar-all m-2"
            id="navbarsExample03"
          >
            <ul className="navbar-nav me-auto mb-2 mb-sm-0">
              <li className="nav-item">
                <NavLink
                  to={"/"}
                  className="nav-link fs-3 ms-3"
                  aria-current="page"
                >
                  HOME
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/game"} className="nav-link fs-3 ms-3">
                  GAME
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/eshop"} className="nav-link fs-3 ms-3">
                  E-SHOP
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/moncompte"} className="nav-link fs-3 ms-3">
                  MON COMPTE
                </NavLink>
              </li>
              <li className="nav-item">
                <Link
                  to={"/login"}
                  className="fs-3 ms-3 btn btn-primary"
                  href="#"
                >
                  Connexion
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"/signup"}
                  className=" fs-3 ms-3 btn btn-success"
                  href="#"
                >
                  Inscription
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
