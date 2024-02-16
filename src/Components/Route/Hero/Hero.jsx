import React from "react";
import styles from "../../../Styles/Style";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <div
        className={`relative h-[67vh]  800px:h-[70vh] object-cover bg-center bg-no-repeat w-full ${styles.noramlFlex} `}
        style={{
          backgroundImage:
            "url(https://themes.rslahmed.dev/rafcart/assets/images/banner-2.jpg)",
        }}
      >
        <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
          <h1
            className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#3d3a3a] font-[600] capitalize`}
          >
            Best Collection for <br /> home Decoration
          </h1>
          <p className="pt-5 flex 800px:max-w-[70%] text-wrap flex-wrap text-[16px] font-[Poppins] font-[400] text-[#000000ba]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae,
            assumenda? Quisquam itaque exercitationem labore vel, dolore quidem
            asperiores, laudantium temporibus soluta optio consequatur aliquam
            deserunt officia. Dolorum saepe nulla provident.
          </p>
          <Link to="/products" className="inline-block">
            <div className={`${styles.button} mt-5`}>
              <span className="text-[#fff] font-[Poppins] text-[18px]">
                Shop Now
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
