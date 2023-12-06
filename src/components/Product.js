import React from "react";

const Product = ({ product, addToPanier }) => {
  return (
    <div className="cadreAchat">
      <div className="borderAchat">
        <div className="imgAchat">
          <img src={product.imageURL} alt="" />
        </div>
        <div className="nomAchat text-center">
          <h5 className="text-center">{product.title}</h5>
          <strong className="text-center">{product.price} €</strong>
        </div>
      </div>
      <button
        className="mt-4 w-100 btnAjoutPanier mb-4 p-4 justify-self-end"
        onClick={() => addToPanier(product)}
      >
        AJOUTER AU PANIER
      </button>
    </div>
  );
};

export default Product;
