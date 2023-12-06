//Panier.js
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Panier.css";
import PanierList from "./PanierList";

const calculateTotalPrice = (panier) => {
  const totalPrice = panier.reduce((total, product) => {
    return total + product.qty * product.price;
  }, 0);

  return totalPrice;
};
const Panier = ({ panier, removeFromPanier }) => {
  const totalAchats = calculateTotalPrice(panier);
  return (
    <div className="mt-4 p-4">
      <div className="container">
        <p>
          <Link to={"/eshop"} className="link">
            E-shop
          </Link>
          /<Link className=" link-active"> Panier</Link>
        </p>
      </div>
      <div className="container">
        <h3>RECAPITULATIF DU PANIER</h3>
        <div>
          {/* Assurez-vous de vérifier si le panier est défini avant de passer à PanierList */}
          {panier && (
            <div>
              <PanierList panier={panier} removeFromPanier={removeFromPanier} />
              <br />
              <div className="d-flex justify-content-end">
                <h2>Total :{totalAchats} €</h2>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="container d-flex justify-content-center">
        <Link to={"/eshop"}>
          <button className="boutt-on w-100 ms-1">CONTINUER MES ACHATS</button>
        </Link>
        <Link to={"/eshop"}>
          <button className="boutt-on w-100">PASSER LA COMMANDE</button>
        </Link>
      </div>
    </div>
  );
};

export default Panier;
