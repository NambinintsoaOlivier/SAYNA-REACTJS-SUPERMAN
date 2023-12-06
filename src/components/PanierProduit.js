import React from "react";
import PanierItem from "./PanierItem";

const PanierProduit = ({ panier }) => {
  return panier.map((item) => (
    <PanierItem key={item.id} panierProductsItem={item} />
  ));
};

export default PanierProduit;
