import React from "react";
import ShopLayout from "../../Components/Shop/Layout/ShopLayout";
import DashboardSideBar from "../../Components/Shop/Layout/Dashboard/DashboardSidebar";
import CreateEvent from "../../Components/Shop/Event/CreateEvent.jsx";

const SellerCreateEvent = () => {
  return (
    <ShopLayout>
      <div className="flex">
        <DashboardSideBar />
        <CreateEvent />
      </div>
    </ShopLayout>
  );
};

export default SellerCreateEvent;
