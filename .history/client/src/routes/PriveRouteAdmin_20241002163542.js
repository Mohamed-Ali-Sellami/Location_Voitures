import React from "react";
import { Outlet, Navigate } from "react-router-dom";
const PrivateRoute = () => {
  const isAdmin = localStorage.getItem("isAdmin");
  return isAdmin ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
