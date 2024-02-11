import React from "react";
import Header from "./Header";
import Drawer from "../../Components/Drawer/Drawer.jsx";
const Layout = ({ children }) => {
  return (
    <div>
      {/* <Drawer /> */}
      <Header activeHeading={1} />
      {children}
    </div>
  );
};

export default Layout;
