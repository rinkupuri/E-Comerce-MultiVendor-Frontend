import React, { useEffect } from "react";
import ShopLayout from "../../Components/Shop/Layout/ShopLayout.jsx";
import DashboardSidebar from "../../Components/Shop/Layout/Dashboard/DashboardSidebar.jsx";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const SellerHome = () => {
  const { isSellerAuthenticated } = useSelector((state) => state.seller);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isSellerAuthenticated) {
      navigate("/login-seller");
    }
  }, []);
  return (
    <ShopLayout>
      <DashboardSidebar active={1} />
    </ShopLayout>
  );
};

export default SellerHome;
