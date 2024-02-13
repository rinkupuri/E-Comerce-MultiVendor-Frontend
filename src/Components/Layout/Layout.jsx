import React, { useEffect, useState } from "react";
import Header from "./Header";
import Drawer from "../../Components/Drawer/Drawer.jsx";
import Footer from "../Route/Footer/Footer.jsx";
const Layout = ({ children }) => {
  return (
    <div>
      {/* <Drawer /> */}
      <Header activeHeading={1} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
