import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          {/* les routes */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="eshop" element={<Eshop />} />
            <Route
              path="/moncompte"
              element={
                <ProtectedRoutes route="eshop">
                  <MonCompte />
                </ProtectedRoutes>
              }
            />
            {/* <Route path="moncompte" element={<MonCompte />} /> */}
            <Route path="signup" element={<SignUp />} />
            <Route path="login" element={<Login />} />
            <Route path="panier" element={<Panier />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
};

export default App;
