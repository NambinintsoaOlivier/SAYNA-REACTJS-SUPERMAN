import React from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

function ProtectedRoutes({ children, route }) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to={`/${route}`} />;
  }

  return children;
}

export default ProtectedRoutes;
