import React from "react";
import { products } from "../data/Products";
import Product from "./Product";

const ProductsList = ({ addToPanier }) => {
  return (
    <>
      {products.map((product) => (
        <Product product={product} addToPanier={addToPanier} />
      ))}
    </>
  );
};

export default ProductsList;
