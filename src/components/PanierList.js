//PanierList.js
import React from "react";
import PanierItem from "./PanierItem";

const PanierList = ({ panier, removeFromPanier }) => {
  return panier.map((item) => (
    <PanierItem
      key={item.id}
      panierProductsItem={item}
      panier={panier}
      removeFromPanier={removeFromPanier}
    />
  ));
};

export default PanierList;
