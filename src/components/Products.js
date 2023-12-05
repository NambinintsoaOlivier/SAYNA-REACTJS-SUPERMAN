import React from "react";
import ProduitItem from "./ProduitItem";

const Products = ({ products, addToPanier }) => {
  return (
    <div className="row justify-content-around mt-4">
      {products.map((product) => (
        <ProduitItem
          key={product.id}
          product={product}
          addToPanier={addToPanier}
        />
      ))}
    </div>
  );
};

export default Products;
