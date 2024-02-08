import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import styles from "../../Styles/Style";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const ProductDetailCard = ({ data, setOpen }) => {
  const [count, setCount] = useState(1);
  const [click, setClick] = useState(false);
  const [select, setSelect] = useState(false);
  const [mainSrc, setMainSrc] = useState(data?.image_Url[0].url);

  return (
    <div className="bg-[#fff]">
      {data && (
        <div className="fixed top-0 left-0 w-full z-10 h-full bg-[#00000030] flex items-center justify-center">
          <div className="w-[90vw] 800px:w-[60%] h-[90vh] overflow-y-scroll bg-white 800px:h-[75vh] relative ">
            <RxCross1
              size={30}
              onClick={() => setOpen(false)}
              className="sticky z-20 left-[95%] top-2 p-[5px] rounded-full cursor-pointer   border-[2px] border-black"
            />
            <div className="block 800px:flex w-full">
              <img src={mainSrc} alt="" className="w-[50%] flex-1 h-[50%]" />
              <div className="flex-1">
                <h1 className={`title ${styles.productTitle}`}>{data.name}</h1>
                <div className="flex">
                  <AiFillStar size={14} color="#F6BA00" />
                  <AiFillStar size={14} color="#F6BA00" />
                  <AiFillStar size={14} color="#F6BA00" />
                  <AiFillStar size={14} color="#F6BA00" />
                  <AiOutlineStar size={14} color="#F6BA00" />
                </div>
              </div>
            </div>

            <div className="flex m-4 overflow-x-scroll max-w-[50%]">
              {data.image_Url.map((i, index) => (
                <div
                  key={index}
                  onClick={() => setMainSrc(i.url)}
                  className="w-[150px] h-[150px] border-[2px] cursor-pointer "
                >
                  <img
                    className="w-full h-full object-contain"
                    src={i.url}
                    alt=""
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailCard;
