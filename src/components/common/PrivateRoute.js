import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../auth/UserAuth";

const PrivateRoute = ({ children }) => {
  const { currentUser } = useAuth();
  return currentUser ? children : <Navigate to="/" />;
};

export default PrivateRoute;
