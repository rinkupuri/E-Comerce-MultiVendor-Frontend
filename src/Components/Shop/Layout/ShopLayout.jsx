import React from "react";
import ShopHeaders from "./ShopHeaders";
import ShopFooter from "./ShopFooter";

const ShopLayout = ({ children }) => {
  return (
    <div>
      <ShopHeaders />
      {children}
      <ShopFooter />
    </div>
  );
};

export default ShopLayout;
