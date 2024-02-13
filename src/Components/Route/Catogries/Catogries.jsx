import React from "react";
import styles from "../../../Styles/Style";
import { brandingData, categoriesData } from "../../../Static/static";
import { useNavigate } from "react-router-dom";

const Catogries = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={`${styles.section} hidden sm:block`}>
        <div className="branding flex my-12 justify-between bg-white rounded-md p-5">
          {brandingData?.map((i, index) => (
            <div className="flex items-start" key={index}>
              {i.icon}
              <div className="px-3">
                <h3 className="font-bold text-sm md:text-base">{i.title}</h3>
                <p className="text-xs md:text-sm">{i.Description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={`${styles.section} bg-white rounded-md p-6 my-12`}>
        <div className="grid grid-cols-1 gap-[5px] md:grid-cols-2 md:gap-[10px] lg:grid-cols-4 lg:gap-[20px] xl:grid-cols-5 xl:gap-[30px]">
          {categoriesData?.map((i, index) => {
            const handelSubmit = (i) => {
              navigate(`/prodcut?catergories=${i.title}`);
            };
            return (
              <div
                key={index}
                onClick={() => handelSubmit(i)}
                className="flex justify-between items-center w-full cursor-pointer   "
              >
                <h3 className="h3">{i.title}</h3>
                <img
                  className="w-[120px] object-cover"
                  src={i.image_Url}
                  alt=""
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Catogries;
