import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import styles from "../../Styles/Style";
import {
  AiFillHeart,
  AiFillMessage,
  AiFillStar,
  AiOutlineHeart,
  AiOutlineStar,
} from "react-icons/ai";

const ProductDetailCard = ({ data, setOpen }) => {
  const [count, setCount] = useState(1);
  const [click, setClick] = useState(false);
  const [select, setSelect] = useState(false);
  const [mainSrc, setMainSrc] = useState(data?.image_Url[0].url);

  return (
    <div className="bg-[#fff]">
      {data && (
        <div className="fixed top-0 left-0 w-full z-10 h-full bg-[#00000030] flex items-center justify-center">
          <div
            className={` p-5 w-[90vw] 800px:w-[80%] 1000px:w-[60%] h-[90vh] overflow-y-scroll bg-white 800px:h-[75vh] relative `}
          >
            <RxCross1
              size={30}
              onClick={() => setOpen(false)}
              className="sticky z-20 left-[95%] top-2 p-[5px] rounded-full cursor-pointer   border-[2px] border-black"
            />

            <div className="block 800px:flex gap-3 w-full">
              {/* images sectrion start from here  */}
              <div className="flex overflow-y-scroll  flex-1 flex-wrap  800px:w-[50%]">
                <img src={mainSrc} alt="" className=" w-full  " />
                <div className="flex 800px:grid 800px:grid-cols-2 py-4 gap-[5px]  w-full h-fit">
                  {data.image_Url.map((i, index) => (
                    <div
                      key={index}
                      onClick={() => setMainSrc(i.url)}
                      className=" w-full  h-fit border-[2px] cursor-pointer "
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

              {/* title section  is starting from here  */}

              <div className="flex-1">
                <h1 className={`title ${styles.productTitle}`}>{data.name}</h1>
                <div className="flex gap-2 items-center my-2">
                  <div className="flex">
                    <AiFillStar size={14} color="#F6BA00" />
                    <AiFillStar size={14} color="#F6BA00" />
                    <AiFillStar size={14} color="#F6BA00" />
                    <AiFillStar size={14} color="#F6BA00" />
                    <AiOutlineStar size={14} color="#F6BA00" />
                  </div>
                  <h5 className="text-[14px]">({data.shop.ratings})Ratings</h5>
                </div>
                <div className="vendorDetail flex items-center justify-center  gap-3">
                  <img
                    className="w-[50px] h-[50px] rounded-full"
                    src={data.shop.shop_avatar.url}
                    alt=""
                  />

                  <div className="flex flex-col ">
                    <h2 className={`${styles.shop_name} py-1 `}>
                      {data.shop.name}
                    </h2>
                  </div>
                </div>
                <div className="flex mt-3 py-6 justify-center items-center   px-4">
                  <div className="flex flex-[2] justify-center ">
                    <h2 className={`${styles.productDiscountPrice}`}>
                      {data.discount_price === 0
                        ? data.price
                        : data.discount_price}
                      $
                    </h2>
                    <h3 className={`${styles.price}`}>
                      {data.price && data.price + "$"}
                    </h3>
                  </div>
                </div>
                <div className="flex py-6">
                  <div className="flex-1 flex justify-center ">
                    <button
                      disabled={count > 1 ? false : true}
                      onClick={() => setCount((count) => count - 1)}
                      className="disabled:cursor-not-allowed cursor-pointer bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold rounded-l px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      onBlur={(e) => setCount(e.target.value < 1 && 1)}
                      className="h-full w-[40px] flex text-center "
                      maxLength={2}
                      name="cart"
                      value={count}
                      onChange={(e) => setCount(e.target.value)}
                      id=""
                    />
                    <button
                      onClick={() =>
                        setCount((count) => (count === "" ? 1 : count + 1))
                      }
                      className=" cursor-pointer bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold rounded-r px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
                    >
                      +
                    </button>
                  </div>

                  <div className="flex-1 flex  items-center justify-center ">
                    <button
                      onClick={() => setSelect(!select)}
                      className={` border py-2 px-5 rounded-md flex gap-2 justify-center items-center`}
                    >
                      Wishlist
                      {select ? (
                        <AiFillHeart color="red" size={20} />
                      ) : (
                        <AiOutlineHeart size={20} />
                      )}
                    </button>
                  </div>
                </div>
                <div className={` w-full text-[#fff] flex justify-center`}>
                  <button className={`${styles.button} !rounded-sm w-[90%]`}>
                    Add to Cart
                  </button>
                </div>
                <div className="desc text-clip text-base w-full py-4 ">
                  {data.description}
                </div>
              </div>
            </div>
            <div className="flex flex-wrap flex-col-reverse 800px:flex-row   w-[full] ">
              <div className="800px:w-6/12 w-full flex-wrap">
                <div className="flex gap-3 justify-between px-3 ">
                  <div
                    className={` rounded-[5px] ${styles.button} 800px:w-[50%] flex   gap-[5px]  text-white`}
                  >
                    Send Message <AiFillMessage size={20} />
                  </div>
                  <div
                    className={`${styles.total_sell} text-[15px] flex justify-end items-end w-fit text-[#44b762] `}
                  >
                    {data.total_sell} Sold
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailCard;
