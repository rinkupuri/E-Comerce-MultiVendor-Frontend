import React, { useState } from "react";
import style from "../../Styles/Style";
import { Link } from "react-router-dom";
import { categoriesData, productData } from "../../Static/static";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { BiMenuAltLeft } from "react-icons/bi";
import { CgProfile, CgUser } from "react-icons/cg";
import DropDown from "./DropDown";
import Navbar from "./Navbar";
const Header = ({ activeHeading }) => {
  const [searchTerm, setSearchTerm] = useState();
  const [searchData, setSearchData] = useState();
  const [dropDown, setDropDown] = useState();
  const [active, setActive] = useState(false);
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
  return (
    <div className="homeContainer">
      <div className={style.section}>
        <div className=" w-full   800px:h-[50px] 800px:my-[20px] 800px:flex items-center justify-between">
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
      <div className="h-[70px]">
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
              </div>
              <div className={`${style.noramlFlex}  mr-[15px]`}>
                <div className="relative">
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
                  <CgProfile
                    className="m-[5px] cursor-pointer"
                    fill="rgb(255,255,255)"
                    size={25}
                  />
                  <span className="absolute top-0 right-0 bg-[#3bc177] flex items-center justify-center rounded-md w-4 h-4 text-white font-mono text-[12px] leading-3 z-20">
                    0
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
