import React, { useState } from "react";
import style from "../../Styles/Style";
import { Link, useNavigate } from "react-router-dom";
import { categoriesData, navItems, productData } from "../../Static/static";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { PiUserCircleDuotone } from "react-icons/pi";
import { IoIosArrowDown, IoIosArrowForward, IoMdLogIn } from "react-icons/io";
import { BiLogInCircle, BiLogOutCircle, BiMenuAltLeft } from "react-icons/bi";
import {
  CgFacebook,
  CgInstagram,
  CgProfile,
  CgUser,
  CgYoutube,
} from "react-icons/cg";
import DropDown from "./DropDown";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import { image_Url, server } from "../../Server/server";
import Cart from "../Cart/Cart.jsx";
import { RxCross1 } from "react-icons/rx";
import axios from "axios";
import facebookPng from "../../Images/facebook.png";
import instagramPng from "../../Images/instagram.png";
import twitterPng from "../../Images/twitter.png";
import youtubePng from "../../Images/youtube (1).png";

const Header = ({ activeHeading }) => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState();
  const [searchData, setSearchData] = useState();
  const [dropDown, setDropDown] = useState();
  const [active, setActive] = useState(false);
  const [cart, setCart] = useState(false);
  const [drawer, setDrawer] = useState(false);

  const handelSumbit = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    const filterData = productData?.filter((product) => {
      return product.name.toLowerCase().includes(term.trim().toLowerCase());
    });
    setSearchData(filterData);
    if (term.trim() === "") return setSearchData(null);
  };
  window.addEventListener("scroll", () => {
    if (window.scrollY > 86) {
      setActive(true);
    } else {
      setActive(false);
    }
  });
  const navigate = useNavigate();

  const logouthandel = async () => {
    const res = await axios.get(`${server}/user/logout`, {
      withCredentials: true,
    });
    navigate("/");
    window.location.reload(true);
  };
  return (
    <div className="homeContainer">
      <div className={`${style.section} min-h-[70px]`}>
        <div className=" hidden   800px:h-[50px] 800px:my-[20px] 800px:flex items-center justify-between">
          <div className="py-3 flex relative items-center justify-center 800px:block">
            <Link to={"/"}>
              <img
                src="https://shopo.quomodothemes.website/assets/images/logo.svg"
                alt=""
              />
            </Link>
          </div>
          <div className="w-full py-3  800px:w-[50%] relative">
            <input
              className="w-full h-[40px] px-2 border-[#3957bd] border-[2px] rounded-md"
              type="text"
              placeholder="Search Product..."
              value={searchTerm}
              onChange={handelSumbit}
            />
            <div className="iconDiv  absolute top-0 right-0 flex justify-center items-center w-[40px] h-full">
              <AiOutlineSearch size={30} className="cursor-pointer p-[2px]" />
            </div>
            {searchData && searchData.length !== 0 ? (
              <div className="absolute min-h-[30vh] bg-slate-50 shadow-sm z-[9] py-4">
                {searchData?.map((i, index) => {
                  const d = i.name;
                  const product_name = d.replace(/\s+/g, "-");
                  return (
                    <Link to={`/product/${product_name}`}>
                      <div className="flex px-5 gap-[20px]">
                        <img
                          height={28}
                          width={28}
                          src={i.image_Url[0].url}
                          alt=""
                          className="object-cover h-[40px] "
                        />
                        <h1>{product_name}</h1>
                      </div>
                    </Link>
                  );
                })}
              </div>
            ) : null}
          </div>
          <div className={`${style.button}  hidden 800px:flex`}>
            <h1 className="flex items-center text-[#fff]">
              Become Seller
              <IoIosArrowForward className="ml-1" />
            </h1>
          </div>
        </div>
      </div>
      <div className="800px:h-[70px]">
        <div
          className={`${
            active ? "shadow-sm fixed top-0 left-0" : null
          } hidden transition z-50  800px:flex items-center justify-between w-full h-[70px]  bg-[#3321c8]`}
        >
          <div
            className={`${style.section} ${style.noramlFlex} justify-between `}
          >
            {/* Categories  */}
            <div
              className={
                "relative top-0 left- h-[60px] mt-[10px] w-[270px] hidden 1000px:block"
              }
            >
              <button
                onClick={() => setDropDown(!dropDown)}
                className="bg-white rounded-t-[5px] absolute top-0 left-0 h-full z-0 w-[270px]"
              >
                All Categories
              </button>
              {dropDown ? (
                <>
                  <DropDown
                    categories={categoriesData}
                    setDropDown={setDropDown}
                  />
                  <IoIosArrowDown size={30} className="absolute top-4 left-2" />
                </>
              ) : (
                <BiMenuAltLeft
                  size={30}
                  className={"absolute z-[1] top-3 left-2"}
                />
              )}
            </div>

            {/* navitems */}
            <div className={`${style.noramlFlex}`}>
              <Navbar active={activeHeading} />
            </div>
            <div className={`${style.noramlFlex}`}>
              <div className={`${style.noramlFlex}  mr-[15px]`}>
                <Link to={"/product/wishlist"}>
                  <div className="relative">
                    <AiOutlineHeart
                      className="m-[5px] cursor-pointer"
                      fill="rgb(255,255,255)"
                      size={25}
                    />
                    <span className="absolute top-0 right-0 bg-[#3bc177] flex items-center justify-center rounded-md w-4 h-4 text-white font-mono text-[12px] leading-3 z-20">
                      0
                    </span>
                  </div>
                </Link>
              </div>
              <div className={`${style.noramlFlex}  mr-[15px]`}>
                <div onClick={() => setCart(true)} className="relative">
                  <AiOutlineShoppingCart
                    className="m-[5px] cursor-pointer"
                    fill="rgb(255,255,255)"
                    size={25}
                  />
                  <span className="absolute top-0 right-0 bg-[#3bc177] flex items-center justify-center rounded-md w-4 h-4 text-white font-mono text-[12px] leading-3 z-20">
                    0
                  </span>
                </div>
              </div>

              <div className={`${style.noramlFlex}  mr-[15px]`}>
                <div className="relative">
                  {isAuthenticated ? (
                    <Link to={"/profile"}>
                      <img
                        width={25}
                        height={25}
                        className="object-cover rounded-full"
                        src={`${image_Url}${user?.avatar.url}`}
                        alt=""
                      />
                    </Link>
                  ) : (
                    <Link to={"/login"}>
                      <CgProfile
                        className="m-[5px] cursor-pointer"
                        fill="rgb(255,255,255)"
                        size={25}
                      />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cart Drawer */}
      {cart && <Cart setCart={setCart} />}

      {/* mobile navbar */}
      <div
        className={`w-full  800px:hidden flex justify-between  items-center fixed top-0 right-0 h-[70px] bg-white z-20`}
      >
        <div
          className={`${style.section} *:stroke-[1.5px] flex justify-between  items-center`}
        >
          <div onClick={() => setDrawer(true)} className="flex cursor-pointer">
            <BiMenuAltLeft className="stroke-[0.2px]" size={40} />
          </div>
          <div className="flex cursor-pointer">
            <Link to={"/"}>
              <img
                src="https://shopo.quomodothemes.website/assets/images/logo.svg"
                alt=""
              />
            </Link>
          </div>
          <div className="flex cursor-pointer relative">
            <AiOutlineShoppingCart size={40} />
            <span className="absolute top-[-2px] right-[-6px] rounded-full flex justify-center items-center text-[15px]  bg-green-500 h-[20px] w-[20px] z-[52]">
              0
            </span>
          </div>
        </div>
      </div>

      {/* mobile Drawer container */}
      <div
        className={`${
          !drawer && "hidden"
        }  flex w-full h-full  800px:hidden z-[51] fixed left-0 top-0 right-0 bg-[#00000030]`}
      >
        <div className="flex w-[70%] overflow-auto flex-col h-full bg-white">
          <div className="flex">
            <div
              className={`flex ${style.section}  justify-between items-center h-fit py-5`}
            >
              <div className="flex cursor-pointer relative">
                <AiOutlineHeart size={25} />
                <span className="absolute top-[-2px] right-[-6px] rounded-full flex justify-center items-center text-[12px]  bg-green-500 h-[15px] w-[15px] z-[52]">
                  0
                </span>
              </div>
              <RxCross1
                className="cursor-pointer"
                size={25}
                onClick={() => setDrawer(false)}
              />
            </div>
          </div>

          {/* search bar start from here */}
          <div className="flex w-full  justify-center items-center">
            <div className=" w-11/12 py-3   relative">
              <input
                className="w-full h-[40px] px-2 border-[#3957bd] border-[2px] rounded-md"
                type="text"
                placeholder="Search Product..."
                value={searchTerm}
                onChange={handelSumbit}
              />
              <div className="iconDiv  absolute top-0 right-0 flex justify-center items-center w-[40px] h-full">
                <AiOutlineSearch size={30} className="cursor-pointer p-[2px]" />
              </div>
              {searchData && searchData.length !== 0 ? (
                <div className="absolute min-h-[30vh] bg-slate-50 shadow-sm z-[9] py-4">
                  {searchData?.map((i, index) => {
                    const d = i.name;
                    const product_name = d.replace(/\s+/g, "-");
                    return (
                      <Link to={`/product/${product_name}`}>
                        <div className="flex px-5 gap-[20px]">
                          <img
                            height={28}
                            width={28}
                            src={i.image_Url[0].url}
                            alt=""
                            className="object-cover h-[40px] "
                          />
                          <h1>{product_name}</h1>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              ) : null}
            </div>
          </div>

          {/* nav items */}
          {navItems?.map((i, index) => {
            return (
              <div
                key={index}
                className="flex w-full  mt-4 pb-4   justify-center items-center"
              >
                <Link
                  className="flex border-b-[2px] w-11/12 justify-start items-center"
                  to={i.url}
                >
                  <div
                    className={`${
                      activeHeading === index + 1 ? "text-[#22229c]" : null
                    } px-2 pb-2`}
                  >
                    {i.title}
                  </div>
                </Link>
              </div>
            );
          })}

          {/* become Seller button */}
          <div className="flex w-full px-5">
            <button
              className={`${style.button} flex justify-center items-center text-[#fff]`}
            >
              <span>Become Seller</span>
              <IoIosArrowForward className="pt-[3px] h-30px" size={20} />
            </button>
          </div>

          {/* profile details */}
          <div className="flex w-full flex-col">
            {isAuthenticated ? (
              <div className="flex justify-between items-center w-10/12">
                <Link to={"/profile"} className="w-full flex px-5 items-center">
                  <img
                    className="object-cover rounded-full w-[40px] h-[40px]"
                    src={`${image_Url}${user?.avatar.url}`}
                    alt=""
                  />
                  <h1 className={`text-[20px] ;font-[500] pl-2`}>
                    {user.name}
                  </h1>
                </Link>
                <div className="flex justify-center items-center">
                  <BiLogOutCircle
                    onClick={logouthandel}
                    title="LogOut"
                    size={25}
                  />
                </div>
              </div>
            ) : (
              <div className="flex w-full justify-center items-center">
                <Link
                  to={"/login"}
                  className="w-full flex justify-center items-center p-5"
                >
                  <PiUserCircleDuotone className=" cursor-pointer " size={35} />
                  <h1 className={`text-[20px] font-[700] pl-2`}>Login</h1>
                </Link>
              </div>
            )}
            <div className="flex px-2 flex-col gap-3 py-5">
              <h3 className="font-[500] text-[16px]"> Follow us</h3>
              <div className="flex gap-3">
                <div className="flex w-[25px] h-[25px]">
                  <img src={instagramPng} alt="" />
                </div>
                <div className="flex w-[25px] h-[25px]">
                  <img src={facebookPng} alt="" />
                </div>
                <div className="flex w-[25px] h-[25px]">
                  <img src={youtubePng} alt="" />
                </div>
                <div className="flex w-[22px] h-[22px]">
                  <img src={twitterPng} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-[30%]" onClick={() => setDrawer(false)}></div>
      </div>
    </div>
  );
};

export default Header;
