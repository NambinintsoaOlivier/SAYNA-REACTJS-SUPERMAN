import React from "react";

const ProduitItem = ({ product, addToPanier }) => {
  const { title, imageURL, price, id } = product;
  const handleToPanier = () => {
    addToPanier(product);
  };
  return (
    <div key={id} className="cadreAchat">
      <div className="borderAchat">
        <div className="imgAchat">
          <img src={imageURL} alt="" />
        </div>
        <div className="nomAchat text-center">
          <h5 className="text-center">{title}</h5>
          <strong className="text-center">{price} €</strong>
        </div>
      </div>
      <button
        className="mt-4 w-100 btnAjoutPanier mb-4 p-4 justify-self-end"
        onClick={() => handleToPanier(id)}
      >
        AJOUTER AU PANIER
      </button>
    </div>
  );
};

export default ProduitItem;
