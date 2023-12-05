import React, { useState } from "react";
import Header from "../components/Header";
import imgHeader from "../styles/Assets/images/img37.png";
import "../styles/MonCompte.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const MonCompte = () => {
  const { navigate } = useNavigate();
  const { user, logout } = useAuth();

  const deconnecter = async () => {
    try {
      await logout();
      navigate("/eshop");
    } catch (e) {
      console.log(e);
    }
  };
  // les props dans header
  const [titre, setTitre] = useState(
    <div className="col-md-9 p-3 d-flex align-items-center ">
      <h1>
        SERIEZ VOUS KRYPTONIEN ? <br /> DITES NOUS EN PLUS?
      </h1>
    </div>
  );

  //contenu
  return (
    <div>
      <Header titre={titre} imgHeader={imgHeader} />
      <br />
      <div className="container">
        <div className="row p-3">
          <div className="col-md-4">
            <h5 className="">Mes informations</h5>
            <p>Historique des commandes</p>
            <p>Mes avis</p>
            <p>Mes favoris</p>
            <button className="btn boutt-on" onClick={deconnecter}>
              DECONNEXON
            </button>
          </div>
          <div className="col-md-8">
            <h3>INFORMATIONS PERSONNELS</h3>
            <hr />
            <p>
              Nom :
              <span className="text-primary"> {user && user.displayName}</span>
            </p>

            <p>Prenom :</p>
            <p>Mot de passe : </p>
            <p>
              Email : <span className="text-primary">{user && user.email}</span>{" "}
            </p>
            <p>Email :</p>
            <p>Numero de téléphone :</p>
            <p>Adresse de livraison : </p>
            <p>Adresse de facturation :</p>
            <button className="btn boutt-on">MODIFIER</button>
          </div>
        </div>
        <br />
        <div className="row p-3">
          <div className="col-md-4"></div>
          <div className="col-md-8">
            <h3>NEWSLETTER</h3>
            <hr />
            <p>
              Abonnez vous à la newsletter ! Ne ratez pas nos offres
              exceptionnels sur votre article préféré !
            </p>
            <div classeName="form-check">
              <input
                classeName="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                checked
              />
              <label classeName="form-check-label" htmlFor="flexRadioDefault1">
                oui
              </label>
            </div>
            <div classeName="form-check">
              <input
                classeName="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
              />
              <label classeName="form-check-label" htmlFor="flexRadioDefault2">
                non
              </label>
            </div>
            <button className="btn boutt-on">ENREGISTRER</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonCompte;
