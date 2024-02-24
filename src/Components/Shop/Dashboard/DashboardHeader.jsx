import React from "react";
import { AiOutlineGift } from "react-icons/ai";
import { MdOutlineLocalOffer } from "react-icons/md";
import { FiPackage, FiShoppingBag, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { BiMessageSquareDetail } from "react-icons/bi";
import { image_Url } from "../../../Server/server";
import { useSelector } from "react-redux";

const DashboardHeader = () => {
  const { seller } = useSelector((state) => state.seller);
  return (
    <div className="flex fixed top-0 left-0 w-full h-[70px] bg-white items-center justify-between">
      <div className="flex">
        <img
          src="https://shopo.quomodothemes.website/assets/images/logo.svg"
          alt=""
        />
      </div>
      <div className="flex gap-5">
        <Link to={"/dashboard/coupns"}>
          <AiOutlineGift title="Coupans" color="#555" size={25} />
        </Link>
        <Link to={"/dashboard/offers"}>
          <MdOutlineLocalOffer title="Offers" color="#555" size={25} />
        </Link>
        <Link to={"/dashboard/orders"}>
          <FiPackage title="Orders" color="#555" size={25} />
        </Link>
        <Link to={"/dashboard/product"}>
          <FiShoppingBag title="Product" color="#555" size={25} />
        </Link>
        <Link to={"/dashboard/message"}>
          <BiMessageSquareDetail title="Message" color="#555" size={25} />
        </Link>
        <Link to={"/dashboard/profile"}>
          <img
            className="rounded-full w-[30px] h-[30px] object-cover"
            src={`${image_Url}${seller.avatar.url}`}
            title="Seller Profile"
            alt=""
          />
        </Link>
      </div>
    </div>
  );
};

export default DashboardHeader;
