import React from "react";
import styles from "../../../Styles/Style";
import { categoriesData } from "../../../Static/static";

const Footer = () => {
  return (
    <>
      <div className="bg-black text-white w-full h-fit">
        <div className={` h-fit bg-[#2e59ad] flex`}>
          <div
            className={`${styles.section} grid grid-cols-1 place-items-center py-6 gap-6 800px:flex 800px:justify-evenly items-center `}
          >
            <h1 className="text-[32px] font-[700]">
              Subscribe Us for <br />
              Latest Update
            </h1>
            <div className="flex items-center w-[260px]  h-fit border-[1px] border-[#000] bg-[#fff] overflow-hidden  rounded-md">
              <input
                type="text"
                className="m-0 p-2 text-[#000] "
                placeholder="Join us "
              />
              <button className="font-[600] h-[40px] rounded-md bg-black m-[2px] px-2 outline-none">
                I'm in
              </button>
            </div>
          </div>
        </div>
        <div className="grid p-5 grid-cols-1 gap-5 place-items-center h-fit sm:grid-cols-2 lg:grid-cols-4 800px:flex justify-evenly items-center">
          <div className="grid place-items-center  ">
            <img
              src="https://shopo.quomodothemes.website/assets/images/logo.svg"
              alt=""
            />
            <p>Inpired Living</p>
          </div>
          <div className="flex flex-col ">
            <h3 className="text-[#fff] font-[500] grid grid-cols-1 h-fit sm:block   ">
              Categories
            </h3>
            <ul className="*:min-w-[250px] *:text-[rgb(138,131,131)] *:cursor-pointer">
              {categoriesData?.slice(0, 5).map((i, index) => {
                return <li key={index}>{i.title}</li>;
              })}
            </ul>
          </div>
          <div className="flex flex-col ">
            <h3 className="text-[#fff] font-[500] grid grid-cols-1 h-fit sm:block   ">
              Company
            </h3>
            <ul className="*:min-w-[250px] *:text-[#8a8383] *:cursor-pointer">
              <li>Home</li>
              <li>About us</li>
              <li>Contact</li>
              <li>Terms & Condition</li>
              <li>Shipping Policy</li>
            </ul>
          </div>
          <div className="flex flex-col ">
            <h3 className="text-[#fff] font-[500] grid grid-cols-1 h-fit sm:block   ">
              Important Links
            </h3>
            <ul className="*:min-w-[250px] *:text-[#8a8383] *:cursor-pointer">
              <li>Track Order</li>
              <li>Support</li>
              <li>Feedback</li>
              <li>Report an issue</li>
              <li>Refer</li>
            </ul>
          </div>
        </div>
        <div className="grid place-items-center w-full ">
          <hr className="w-11/12 border-[#fff]" />
        </div>
        <div
          className={`${styles.section} flex justify-between flex-col 800px:flex-row gap-5 items-center p-6`}
        >
          <span className="">All Copyright&copy; Reserved, 2024</span>
          <span className="cursor-pointer">Terms.Privacy</span>
          <div className="">
            <img
              src="https://hamart-shop.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooter-payment.a37c49ac.png&w=640&q=75"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
