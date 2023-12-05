import React, { useState } from "react";
import "../styles/SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useRef } from "react";

const SignUp = () => {
  // declaration de variable qui va contenir les donnees
  const [nomUser, setNomUser] = useState("");
  const [prenomUser, setPrenomUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const passwordConfirmRef = useRef();
  const [error, setError] = useState("");

  // pour la navigation auto dans une autre page
  const navigate = useNavigate();

  // pour avoir acces au function createUser dans useAuth
  const { createUser } = useAuth();

  // validation
  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== passwordConfirmRef.current.value) {
      return setError("Les password ne sont pas identique");
    }
    setError("");
    try {
      await createUser(email, password, nomUser, prenomUser);
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
              <h2>INSCRIPTION</h2>
              <p className="text-center">
                vous avez déja un compte?
                <Link to={"/login"}> connectez-vous ici</Link>
              </p>
            </div>
            <form onSubmit={onSubmit}>
              {/* <form onSubmit={"onSubmit"}> */}
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Nom
                </label>
                <input
                  type="text"
                  placeholder="Nom"
                  className="form-control"
                  id="exampleFormControlInput1"
                  // value={"nomUser"}
                  value={nomUser}
                  onChange={(e) => setNomUser(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput2"
                  className="form-label"
                >
                  Prenoms
                </label>
                <input
                  type="text"
                  placeholder="Premons"
                  className="form-control"
                  id="exampleFormControlInput2"
                  // value={"prenomUser"}
                  value={prenomUser}
                  onChange={(e) => setPrenomUser(e.target.value)}
                  required
                />
              </div>
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
                  // value={"email"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
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
                  // value={"password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="confirmePassword" className="form-label">
                  Confirmer Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmePassword"
                  // ref={"passwordConfirmRef"}
                  ref={passwordConfirmRef}
                  required
                />
              </div>
              <div className="mb-3 d-flex">
                <label>
                  Je reconnais avoir pris connaissance et j’accepte les termes
                  des conditions générales d’utilisation.
                </label>
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault"
                    required
                  />
                </div>
              </div>
              <button className="w-100 btn btn-lg btn-primary" type="submit">
                VALIDER
              </button>
            </form>
            {/* <div className="text-center">{"error"}</div> */}
            <div className="text-center">{error}</div>
          </div>
        </div>
      </main>
    </>
  );
};

export default SignUp;
