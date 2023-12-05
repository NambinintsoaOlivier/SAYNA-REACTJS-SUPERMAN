import React, { useState } from "react";
import "../styles/NavBar.css";
import { Link, NavLink } from "react-router-dom";
import logoNav from "../styles/Assets/logos/logo_blanc.png";
import { useAuth } from "../context/AuthContext";

const NavBar = () => {
  const { user } = useAuth();

  const [isMenuOpen, setMenuOpen] = useState();

  const handleItemClick = () => {
    setMenuOpen(false);
  };
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
            onClick={() => setMenuOpen(!isMenuOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`collapse navbar-collapse ${
              isMenuOpen ? "open" : ""
            } navbar-all m-2`}
            id="navbarsExample03"
          >
            <ul className="navbar-nav me-auto mb-2 mb-sm-0">
              <li className="nav-item " onClick={handleItemClick}>
                <NavLink
                  to={"/"}
                  className="nav-link   ms-3"
                  aria-current="page"
                >
                  HOME
                </NavLink>
              </li>
              <li className="nav-item" onClick={handleItemClick}>
                <NavLink to={"/game"} className="nav-link  ms-3">
                  GAME
                </NavLink>
              </li>
              <li className="nav-item" onClick={handleItemClick}>
                <NavLink to={"/eshop"} className="nav-link  ms-3">
                  E-SHOP
                </NavLink>
              </li>
              {user ? (
                <li className="nav-item" onClick={handleItemClick}>
                  <NavLink to={"/moncompte"} className="nav-link  ms-3">
                    MON COMPTE
                  </NavLink>
                </li>
              ) : (
                <>
                  <li className="nav-item" onClick={handleItemClick}>
                    <Link
                      to={"/login"}
                      className="log ms-3 mb-2 btn btn-outline-primary"
                    >
                      Connexion
                    </Link>
                  </li>
                  <li className="nav-item" onClick={handleItemClick}>
                    <Link
                      to={"/signup"}
                      className="sign  ms-3 btn btn-outline-success"
                    >
                      Inscription
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
