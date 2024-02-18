import React from "react";
import DashboardHeader from "../Dashboard/DashboardHeader";
import styles from "../../../Styles/Style";

const ShopHeaders = () => {
  return (
    <div className="flex w-full bg-white justify-center items-center h-[70px]">
      <div className={`${styles.section} h-[70px] justify-center items-center`}>
        <DashboardHeader />
      </div>
    </div>
  );
};

export default ShopHeaders;
