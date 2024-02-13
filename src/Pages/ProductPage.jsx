import React, { useEffect, useState } from "react";
import Layout from "../Components/Layout/Layout";
import styles from "../Styles/Style";
import { useParams } from "react-router-dom";
import { productData } from "../Static/static";
import {
  AiFillHeart,
  AiFillStar,
  AiOutlineHeart,
  AiOutlineStar,
} from "react-icons/ai";
import ProductCard from "../Components/Layout/ProductCard";

const ProductPage = () => {
  const { name } = useParams();
  const q = name.replace(/\-/g, " ");
  const pdata = productData;
  const [imgUrl, setImgUrl] = useState();
  const [select, setSelect] = useState();
  const [count, setCount] = useState(1);
  const [data, setData] = useState(null);

  useEffect(() => {
    const data = pdata.filter((i) => i.name === q)[0];
    setData(data);
    setImgUrl(data?.image_Url[0].url);
  }, [name]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [name]);

  return (
    <>
      {data && (
        <Layout>
          <div className={`${styles.section} mt-3 800px:mt-5`}>
            <div className="flex flex-col 800px:flex-row w-full ">
              {/* images Section  */}
              <div className="flex w-full overflow-y-scroll gap-3  flex-col 800px:w-[50%] justify-center items-center px-2 pt-2 pb-[1px]">
                <img className="w-full" src={imgUrl} alt="" />
                <div className="flex gap-[2%] 800px:flex-wrap 800px:overflow-x-scroll flex-nowrap  h-fit w-full justify-center items-center">
                  {data.image_Url.map((i, index) => {
                    return (
                      <img
                        key={index}
                        src={i.url}
                        className="cursor-pointer w-[150px] h-[150px] 800px:h-fit 800px:w-[49%] object-cover"
                        onClick={() => setImgUrl(i.url)}
                        alt={i.name}
                      />
                    );
                  })}
                </div>
              </div>

              {/* Product Heading Section  */}
              <div className="flex w-full flex-col 800px:w-[50%] mt-2 px-[5%]">
                <div className="flex justify-center items-center 800px:justify-start 800px:items-start w-full h-fit">
                  <h1 className={`${styles.heading}`}>{data.name}</h1>
                </div>

                {/* Product rating Section  */}
                <div className="flex justify-center items-center 800px:justify-start 800px:items-start ">
                  <AiFillStar color="#F6BA00" size={20} />
                  <AiFillStar color="#F6BA00" size={20} />
                  <AiFillStar color="#F6BA00" size={20} />
                  <AiFillStar color="#F6BA00" size={20} />
                  <AiOutlineStar color="#F6BA00" size={20} />
                  <span>({data.shop.ratings}) Ratings</span>
                </div>

                {/* Prodcut Vendor Details Section  */}
                <div className="flex justify-center items-center 800px:justify-start 800px:items-start gap-2 800px:mt-5 mt-3 ">
                  <img
                    className="w-12 rounded-full object-contain h-12"
                    src={data.shop.shop_avatar}
                    alt=""
                  />
                  <div className="flex flex-col justify-center items-center ">
                    <span>{data.shop.name}</span>
                  </div>
                </div>

                {/* Product Price Section */}
                <div className=" flex justify-center items-center 800px:justify-start 800px:items-start gap-3 mt-6">
                  <span
                    className={`${styles.productDiscountPrice} text-[20px]`}
                  >
                    {data.discount_price}$
                  </span>
                  <span className={`${styles.price} text-[15px]`}>
                    {data.price && data.price + "$"}
                  </span>
                </div>

                {/* order Quantity and Wishlist  */}
                <div className="flex justify-center items-center 800px:justify-start 800px:items-start mt-6 flex-col">
                  <div className="flex w-[80%] flex-row justify-between">
                    <div className="flex flex-col gap-1">
                      Quantity
                      <div className=" mt-3 flex">
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
                    </div>
                    <div className="flex items-end">
                      <button
                        onClick={() => setSelect(!select)}
                        className={` border-[#000] border-[1px] h-fit py-2 px-5 rounded-md flex gap-2 justify-center items-center`}
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
                </div>

                {/* Add to cart Button  */}
                <div className="flex mt-6 w-full justify-center items-center 800px:justify-start 800px:items-start">
                  <button
                    className={`${styles.button} !my-0 font-[600] hover:bg-slate-100 text-[#000] bg-white border-[1px] border-[#12103f] w-full  800px:w-[80%] !rounded-sm`}
                  >
                    Add to Cart
                  </button>
                </div>

                {/* Buy Now Button */}
                <div className="flex mt-2 w-full justify-center items-center 800px:justify-start 800px:items-start">
                  <button
                    className={`${styles.button} !my-0 font-[600]  bg-[#12103f] text-[#fff] 800px:w-[80%] w-full !rounded-sm`}
                  >
                    Buy it Now
                  </button>
                </div>

                {/* description Section  */}
                <div className="flex 800px:w-[90%] mt-2 justify-center items-center 800px:justify-start 800px:items-start">
                  <p className="text-justify">{data.description}</p>
                </div>
              </div>
            </div>

            {/* product Details Section */}
            <ProductDetails data={data} />
            {/* Featured Product Section */}
            <div className="flex flex-col my-5">
              <h1 className={`${styles.heading} 800px:justify-start`}>
                Featured Product
              </h1>
              <div className="grid gap-3 my-4 grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
                {productData.slice(0, 6).map((i, index) => {
                  return <ProductCard data={i} />;
                })}
              </div>
            </div>
          </div>
        </Layout>
      )}
    </>
  );
};

const ProductDetails = ({ data }) => {
  const [active, setActive] = useState(1);
  return (
    <div className=" bg-gray-400 flex flex-col  items-center w-full h-[500px]">
      <div
        className={` *:${styles.heading} *:cursor-pointer h-fit *:text-[20px]  p-5 flex justify-evenly w-full`}
      >
        <h1
          onClick={() => setActive(1)}
          className={active === 1 && `border-b-[3px] border-[#000]`}
        >
          Description
        </h1>
        <h1
          onClick={() => setActive(2)}
          className={active === 2 && `border-b-[3px] border-[#000]`}
        >
          Reviews
        </h1>
        <h1
          onClick={() => setActive(3)}
          className={active === 3 && `border-b-[3px] border-[#000]`}
        >
          Seller Details
        </h1>
      </div>
      <p className="text-justify w-[90%]">
        {active === 1 ? data.description : active === 2 ? data.name : data.id}
      </p>
    </div>
  );
};

export default ProductPage;
