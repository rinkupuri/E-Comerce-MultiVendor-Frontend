import React from "react";
import DashboardSideBar from "../../Components/Shop/Layout/Dashboard/DashboardSidebar";
import ShopLayout from "../../Components/Shop/Layout/ShopLayout";
import ShopProductCreate from "../../Components/Shop/ShopProductCreate.jsx";

const SellerCreateProduct = () => {
  return (
    <ShopLayout>
      <div className="flex">
        <DashboardSideBar />
        <div className="flex w-full justify-center items-center  overflow-y-scroll">
          <ShopProductCreate />
        </div>
      </div>
    </ShopLayout>
  );
};

export default SellerCreateProduct;
