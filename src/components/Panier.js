import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Panier.css";

const Panier = ({ panier, Updatepanier }) => {
  const total = panier.reduce(
    (acc, prodType) => acc + prodType.amount * prodType.price,
    0
  );

  useEffect(() => {
    document.title = `${total}€ d'achats`;
  }, [total]);

  return (
    <div className="mt-4">
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
        {panier.length > 0 ? (
          <div>
            {panier.map(({ title, price, imageUrl, amount }, index) => (
              <div
                key={`${title}-${index}`}
                className="cadre-produit-panier d-flex  w-100 p-4 align-items-center mt-3"
              >
                <div className="element-img-panier">
                  <img className="w-100" src={imageUrl} alt="" />
                </div>
                <div className="element-info-panier w-50 m-2">
                  <h4>{title}</h4>
                  <p>Numero du produit</p>
                  <span>X-----</span>
                </div>
                <div className="d-flex justify-content-between w-100">
                  <div className="element-prix">
                    <h3>{price}</h3>
                  </div>
                  <div className="nombre-element ">2</div>
                  <button className="justify-self-end">fermer</button>
                </div>
              </div>
            ))}

            <div className="container d-flex justify-content-end mt-2">
              <h2>TOTAL :{total} €</h2>
            </div>
          </div>
        ) : (
          <div>Vide</div>
        )}
      </div>

      <div className="container d-flex justify-content-center">
        <button className="boutt-on w-25"> CONTINUER MES ACHATS</button>
        <button className="boutt-on w-25">PASSER LA COMMANDE</button>
      </div>
    </div>
  );
};

export default Panier;
