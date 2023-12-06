import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import Eshop from "../pages/Eshop";
import MonCompte from "../pages/MonCompte";
import PageNotFound from "../pages/PageNotFound";
import SignUp from "./SignUp";
import Login from "./Login";
import Panier from "./Panier";
import { AuthContextProvider } from "../context/AuthContext";
import ProtectedRoutes from "./ProtectedRoutes";

const App = () => {
  const [panier, setPanier] = useState([]);

  const addToPanier = (product) => {
    const existingItemIndex = panier.findIndex(
      (item) => item.id === product.id
    );
    if (existingItemIndex !== -1) {
      const updatedPanier = [...panier];
      updatedPanier[existingItemIndex].qty += 1;
      updatedPanier[existingItemIndex].totalProductPrice =
        updatedPanier[existingItemIndex].qty *
        updatedPanier[existingItemIndex].price;
      setPanier(updatedPanier);
    } else {
      setPanier((prevPanier) => [
        ...prevPanier,
        {
          ...product,
          qty: 1,
          totalProductPrice: product.price,
        },
      ]);
    }
  };
  const removeFromPanier = (productId) => {
    const existingItemIndex = panier.findIndex((item) => item.id === productId);

    if (existingItemIndex !== -1) {
      const updatedPanier = [...panier];
      updatedPanier.splice(existingItemIndex, 1);
      setPanier(updatedPanier);
    }
  };
  return (
    <Router>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="eshop" element={<Eshop addToPanier={addToPanier} />} />
            <Route
              path="/moncompte"
              element={
                <ProtectedRoutes route="eshop">
                  <MonCompte />
                </ProtectedRoutes>
              }
            />
            <Route path="signup" element={<SignUp />} />
            <Route path="login" element={<Login />} />
            <Route
              path="panier"
              element={
                <Panier panier={panier} removeFromPanier={removeFromPanier} />
              }
            />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </AuthContextProvider>
    </Router>
  );
};

export default App;
