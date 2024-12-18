import React from "react";
import { Navigate } from "react-router-dom";
import {jwtDecode} from "jwt-decode";


const RoleProtectedRoute = ({ children, requiredRole }) => {
  const token = localStorage.getItem("token");
  if (!token) return <Navigate to="/api/login" />;

  const userData = jwtDecode(token);
  return userData.role === requiredRole ? children : <Navigate to="/403" />;
};

export default RoleProtectedRoute;
