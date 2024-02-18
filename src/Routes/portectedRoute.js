import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PortectedRoute = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.user);

  if (!isAuthenticated) {
    return <Navigate to={"/"} />;
  } else {
    return children;
  }
};

const SellerProtectedRoute = ({ children }) => {
  const { isSellerAuthenticated, seller } = useSelector(
    (state) => state.seller
  );

  if (seller)
    if (!isSellerAuthenticated) {
      return <Navigate to={`/dashboard`} />;
    } else {
      return children;
    }
};

export { PortectedRoute, SellerProtectedRoute };
