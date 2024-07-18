import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element }) => {
  const isLoggedIn = !!document.cookie.split("; ").find((row) => row.startsWith("token="));
  return isLoggedIn ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;
