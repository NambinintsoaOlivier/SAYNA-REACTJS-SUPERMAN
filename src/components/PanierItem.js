// PanierItem.js
import React from "react";
import "../styles/PanierItem.css";
import close from "../styles/Assets/icones/close.png";

const PanierItem = ({ key, panierProductsItem, removeFromPanier }) => {
  const handleRemoveItem = () => {
    removeFromPanier(panierProductsItem.id);
  };
  console.log(panierProductsItem.title);
  return (
    <>
      <div className="cadre-produit-panier d-flex w-100 p-2 align-items-center mt-3">
        <div className="element-img-panier">
          <img
            className="w-100 h-100"
            src={panierProductsItem.imageURL}
            alt=""
          />
        </div>
        <div className="element-info-panier w-50 m-2">
          <h4>{panierProductsItem.title}</h4>

          <p key={key}>Numero du produit</p>

          <span>{`X${panierProductsItem.qty}`}</span>
        </div>
        <div className="d-flex justify-content-between w-100">
          <div className="element-prix">
            <h3>{panierProductsItem.price} €</h3>
          </div>

          <div className="d-flex nombre-element justify-content-center align-items-center">
            <button>-</button>
            <span className="d-flex align-items-center justify-content-center">
              {panierProductsItem.qty}
            </span>
            <button>+</button>
          </div>
          <p className="justify-self-end align-self-center ">
            <img
              onClick={handleRemoveItem}
              style={{ width: "20px" }}
              src={close}
              alt=""
            />
          </p>
        </div>
      </div>
    </>
  );
};

export default PanierItem;
