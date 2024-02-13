import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { IoBagHandleOutline } from "react-icons/io5";
import { HiMinus, HiPlus } from "react-icons/hi";

const Cart = ({ setCart }) => {
  const cartData = [
    {
      name: "iPhone kjn inikni jjk noin ioni ububy uguytfuyyvutvgjghvjytgvuyjthgvjygbh",
      description: "phone",
      price: "3000",
    },
    {
      name: "iPhone2",
      description: "phone",
      price: "3000",
    },
    {
      name: "iPhone2",
      description: "phone",
      price: "3000",
    },
  ];
  return (
    <div className="fixed z-[20]  w-full h-full top-0 right-0 flex justify-end items-end bg-[rgba(0,0,0,0.19)]">
      <div onClick={() => setCart(false)} className="w-[75%] h-full"></div>
      <div className="flex z-[20] flex-col h-full w-[25%] bg-white">
        <div className="flex flex-row p-2 justify-end items-end w-full h-fit m-2">
          <RxCross1
            onClick={() => setCart(false)}
            size={25}
            className="cursor-pointer mx-3"
          />
        </div>
        {/* item Start here */}
        <div className="flex flex-col w-full">
          <div className="flex w-full px-5 items-center gap-3">
            <IoBagHandleOutline size={25} className="" />
            <h5 className="text-[20px] font-[600]">Item In Cart</h5>
          </div>
          <div className="cartItem mt-6">
            {cartData?.map((i, index) => {
              return <CartCard key={index} data={cartData} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const CartCard = ({ data }) => {
  const [value, setValue] = useState(1);

  return (
    <>
      <div className="flex w-full justify-center items-center mt-4 ">
        <div className="flex border-b  border-gray-500 w-[90%]">
          <div className="flex flex-col justify-center items-center">
            <div
              onClick={() => setValue((value) => value + 1)}
              className="flex justify-center items-center bg-red-600 rounded-full w-[17px] h-[17px] "
            >
              <HiPlus />
            </div>
            <span>{value}</span>
            <div
              onClick={() => setValue((value) => (value > 1 ? value - 1 : 1))}
              className="flex justify-center items-center bg-gray-600 rounded-full mb-2 w-[17px] h-[17px] "
            >
              <HiMinus />
            </div>
          </div>
          <div className="flex m-4">
            <img
              className="object-contain !max-w-[35px] !w-[35px] h-[35px]"
              src="data:image/webp;base64,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"
              alt=""
            />
          </div>
          <div className="flex flex-col">
            <h2 className=" w-[50%] overflow-hidden text-ellipsis text-nowrap">
              {data[0].name}
            </h2>
            <h5 className="text-[14px] text-gray-500">
              {data[0].price} * {value}
            </h5>
            <h3>{data[0].price * value}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
