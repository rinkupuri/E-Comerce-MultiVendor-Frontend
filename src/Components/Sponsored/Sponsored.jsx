import styled from "@emotion/styled";
import React from "react";
import { sponsored } from "../../Static/static";
import styles from "../../Styles/Style";

const Sponsored = () => {
  return (
    <div className={`${styles.section}  `}>
      <div className="grid grid-cols-2 gap-10 800px:flex  w-full bg-white mb-8 p-8 flex-wrap 800px:flex-row justify-evenly items-center">
        {sponsored.map((i, index) => {
          return (
            <div key={index} className="flex items-center justify-center">
              <img src={i.img_url} className="w-[150px] object-cover" alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sponsored;
