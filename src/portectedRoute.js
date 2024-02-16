import React from "react";
import { Navigate } from "react-router-dom";

const PortectedRoute = ({ isAuthenticated, children }) => {
  console.log(isAuthenticated);
  if (!isAuthenticated) {
    return <Navigate to={"/"} />;
  } else {
    return children;
  }
};

export default PortectedRoute;
