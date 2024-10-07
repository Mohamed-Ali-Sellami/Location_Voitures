import React from "react";
import { Outlet, Navigate } from "react-router-dom";
const PrivateRoute = () => {
  const isAuth = localStorage.getItem("token");
  const isAdmin = localStorage.getItem("isAdmin");
  return isAuth ? && <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
