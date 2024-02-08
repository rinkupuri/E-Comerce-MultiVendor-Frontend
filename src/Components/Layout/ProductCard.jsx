import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "../../Styles/Style";
import {
  AiFillHeart,
  AiFillStar,
  AiOutlineEye,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineStar,
} from "react-icons/ai";
import ProductDetailCard from "../Layout/ProductDetailCard";

const ProductCard = ({ data }) => {
  const [whishlistClick, setWhishlistclick] = useState(false);
  const [open, setOpen] = useState(false);
  const name = data?.name;
  const product_name = name.replace(/\s+/g, "-");
  return (
    <div>
      <div className="w-full h-fit bg-white rounded-lg  shadow-sm p-2 relative cursor-pointer  ">
        <div className="flex justify-end"></div>
        <Link to={`/product/${product_name}`}>
          <img
            src={data?.image_Url[0]?.url}
            className="w-full h-[170px] object-contain"
            alt=""
          />
        </Link>
        <Link to={"/"}>
          <h5 className={`${style.shop_name}`}>{data?.shop.name}</h5>
        </Link>
        <Link to={`/product/${product_name}`}>
          <h4 className="pb-3 font-[500]">
            {data?.name.length > 50
              ? data?.name.slice(0, 50) + "..."
              : data?.name}
          </h4>
          <div className="flex">
            <AiFillStar color="#F6BA00" size={20} />
            <AiFillStar color="#F6BA00" size={20} />
            <AiFillStar color="#F6BA00" size={20} />
            <AiFillStar color="#F6BA00" size={20} />
            <AiOutlineStar color="#F6BA00" size={20} />
          </div>
          <div className="py-2 flex items-center justify-between">
            <div className="flex">
              <h5 className={`${style.productDiscountPrice}`}>
                {data?.discount_price === 0
                  ? data?.price + "$"
                  : data?.discount_price + "$"}
              </h5>
              <h4 className={`${style.price}`}>
                {data?.price && data?.price + "$"}
              </h4>
            </div>
            <span className="font-[400] text-[17px] text-[#44b762]">
              {data?.total_sell}Sold
            </span>
          </div>
        </Link>
        {/* Product icons */}
        {whishlistClick ? (
          <AiFillHeart
            className="absolute cursor-pointer top-4 right-2"
            color="red"
            size={25}
            title="Add to whislist"
            onClick={() => setWhishlistclick(!whishlistClick)}
          />
        ) : (
          <AiOutlineHeart
            title="Remove from whislist"
            className="absolute cursor-pointer top-4 right-2"
            color="#333"
            onClick={() => setWhishlistclick(!whishlistClick)}
            size={25}
          />
        )}
        <AiOutlineEye
          title="Quick View"
          className="absolute cursor-pointer top-14 right-2"
          color="#333"
          onClick={() => setOpen(!open)}
          size={25}
        />
        <AiOutlineShoppingCart
          title="Add to cart"
          className="absolute cursor-pointer top-24 right-2"
          color="#333"
          size={25}
        />
      </div>
      {open ? (
        <ProductDetailCard open={open} setOpen={setOpen} data={data} />
      ) : null}
    </div>
  );
};

export default ProductCard;
