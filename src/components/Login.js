import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // declaration de variable qui va contenir les donnees
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // // pour la navigation auto dans une autre page
  const navigate = useNavigate();

  // pour avoir acces au function login dans useAuth
  const { login } = useAuth();

  // bouton validation
  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(email, password);
      navigate("/moncompte");
    } catch (e) {
      setError(e.message);
    }
  };
  return (
    <>
      <section id="hero">
        <div className="hero-image-inscription"></div>
      </section>
      <main className="container d-flex justify-content-center position-relative top-100">
        <div className="bloc-form">
          <div className="form-signin">
            <div className="head text-center">
              <h2>CONNEXION</h2>
              <p className="text-center">
                vous n'avez pas encore un compte?
                <Link to={"/signup"}> inscrivez-vous ici</Link>
              </p>
            </div>
            <form onSubmit={onSubmit}>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput3"
                  className="form-label"
                >
                  Email address
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="form-control"
                  id="exampleFormControlInput3"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput4"
                  className="form-label"
                >
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleFormControlInput4"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button className="w-100 btn btn-lg btn-primary" type="submit">
                VALIDER
              </button>
            </form>
            <div>{error}</div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;
