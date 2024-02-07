import React from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header activeHeading={1} />
      {children}
    </div>
  );
};

export default Layout;
