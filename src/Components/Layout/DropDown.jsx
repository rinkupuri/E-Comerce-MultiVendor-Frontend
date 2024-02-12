import React from "react";
import { useNavigate } from "react-router-dom";
import { categoriesData } from "../../Static/static";
import styles from "../../Styles/Style";

const DropDown = ({ categories, setDropDown }) => {
  const nevigate = useNavigate();
  const submitHandler = (i) => {
    const name = i.title.replace(/\s/g, "-");
    setDropDown(false);
    nevigate(`/product?categories=${name}`);
  };
  return (
    <div className="pb-4 absolute top-[60px] w-full transition duration-500  z-30 bg-white rounded-b-md shadow-sm">
      {categoriesData?.map((i, index) => {
        return (
          <div
            key={index}
            onClick={() => submitHandler(i)}
            className={`${styles.noramlFlex} `}
          >
            <img
              src={i.image_Url}
              className={`object-cover w-[25px] h-[25px] ml-[5px] select-none`}
              alt=""
            />
            <h3 className={`m-3 cursor-pointer select-none`}>{i.title}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default DropDown;
