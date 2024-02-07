import React from "react";
import styles from "../../Styles/Style";
import { navItems } from "../../Static/static";
import { Link } from "react-router-dom";

const Navbar = ({ active }) => {
  return (
    <div className={styles.noramlFlex}>
      {navItems?.map((i, index) => (
        <div key={index} className="flex">
          <Link
            className={`${
              active === index + 1 ? "text-red-400" : "text-white "
            } gap-3 px-5 cursor-pointer  `}
            to={i.url}
          >
            {i.title}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Navbar;
