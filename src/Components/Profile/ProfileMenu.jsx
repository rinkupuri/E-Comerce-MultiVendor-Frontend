import React from "react";
import { RxPerson } from "react-icons/rx";
import {
  AiOutlineCreditCard,
  AiOutlineLogin,
  AiOutlineLogout,
  AiOutlineMessage,
} from "react-icons/ai";

import { HiOutlineReceiptRefund, HiOutlineShoppingBag } from "react-icons/hi";
import { MdOutlineTrackChanges } from "react-icons/md";
import { TbAddressBook } from "react-icons/tb";
import axios from "axios";
import { server } from "../../Server/server";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ProfileMenu = ({ active, setActive }) => {
  const navigate = useNavigate();
  const logout = async () => {
    try {
      const res = await axios.get(`${server}/user/logout`, {
        withCredentials: true,
      });

      toast.success(res.data.message);
      window.location.reload(true);
      navigate("/");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <div className="bg-white w-full h-fit p-3 pt-5 rounded-[10px]">
      <div onClick={() => setActive(1)} className="flex my-10 cursor-pointer">
        <RxPerson size={20} />
        <span
          className={`${
            active === 1 && "text-red-700 "
          } ml-3 text-[16px] 800px:block hidden `}
        >
          Person
        </span>
      </div>
      <div onClick={() => setActive(2)} className="flex my-10 cursor-pointer">
        <HiOutlineShoppingBag size={20} />
        <span
          className={`${
            active === 2 && "text-red-700 "
          } ml-3 text-[16px] 800px:block hidden`}
        >
          Order
        </span>
      </div>
      <div onClick={() => setActive(3)} className="flex my-10 cursor-pointer">
        <HiOutlineReceiptRefund size={20} />
        <span
          className={`${
            active === 3 && "text-red-700 "
          } ml-3 text-[16px] 800px:block hidden`}
        >
          Refund
        </span>
      </div>
      <div onClick={() => setActive(4)} className="flex my-10 cursor-pointer">
        <AiOutlineMessage size={20} />
        <span
          className={`${
            active === 4 && "text-red-700 "
          } ml-3 text-[16px] 800px:block hidden`}
        >
          Inbox
        </span>
      </div>
      <div onClick={() => setActive(5)} className="flex my-10 cursor-pointer">
        <MdOutlineTrackChanges size={20} />
        <span
          className={`${
            active === 5 && "text-red-700 "
          } ml-3 text-[16px] 800px:block hidden`}
        >
          Track Your Order
        </span>
      </div>
      <div onClick={() => setActive(6)} className="flex my-10 cursor-pointer">
        <AiOutlineCreditCard size={20} />
        <span
          className={`${
            active === 6 && "text-red-700 "
          } ml-3 text-[16px] 800px:block hidden`}
        >
          Payment Method
        </span>
      </div>
      <div
        onClick={() => setActive(7)}
        className="flex 800px:my-5 c cursor-pointer"
      >
        <TbAddressBook size={20} />
        <span
          className={`${
            active === 7 && "text-red-700 "
          } ml-3 text-[16px] 800px:block hidden`}
        >
          Address
        </span>
      </div>
      <div
        onClick={() => setActive(8) || logout()}
        className="flex my-10  cursor-pointer"
      >
        <AiOutlineLogout size={20} />
        <span
          className={`${
            active === 8 && "text-red-700 "
          } ml-3 text-[16px] 800px:block hidden`}
        >
          Log Out
        </span>
      </div>
    </div>
  );
};

export default ProfileMenu;

// const profileMenu = [{id:1, menu: "Person" , icon : () }];
