import React, { useState } from "react";
import styles from "../../Styles/Style";
import { useSelector } from "react-redux";
import {
  AiFillDelete,
  AiOutlineArrowRight,
  AiOutlineCamera,
  AiOutlinePlus,
} from "react-icons/ai";
import { image_Url } from "../../Server/server";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";

const ProfileView = ({ active }) => {
  const { user } = useSelector((state) => state.user);
  const [name, setName] = useState(user && user.name);
  const [email, setEmail] = useState(user && user.email);
  const [phoneNumber, setPhoneNumber] = useState(user && user.phoneNumber);
  const [password, setPassword] = useState("");
  const handleImage = () => {};
  const handleSubmit = () => {};

  return (
    <div className="w-full flex justify-center ">
      {/* Profile Page  */}
      {active === 1 && (
        <div className="800px:w-[60%] w-[90%] mt-10">
          <>
            <div className="flex justify-center w-full">
              <div className="relative">
                <img
                  src={`${image_Url}${user?.avatar?.url}`}
                  className="w-[150px] h-[150px] rounded-full object-cover border-[3px] border-[#3ad132]"
                  alt=""
                />
                <div className="w-[30px] h-[30px] bg-[#E3E9EE] rounded-full flex items-center justify-center cursor-pointer absolute bottom-[5px] right-[5px]">
                  <input
                    type="file"
                    id="image"
                    className="hidden"
                    onChange={handleImage}
                  />
                  <label htmlFor="image">
                    <AiOutlineCamera />
                  </label>
                </div>
              </div>
            </div>
            <br />
            <br />
            <div className="w-full px-5">
              <form onSubmit={handleSubmit} aria-required={true}>
                <div className="w-full 800px:flex block pb-3">
                  <div className=" w-[100%] 800px:w-[50%]">
                    <label className="block pb-2">Full Name</label>
                    <input
                      type="text"
                      className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className=" w-[100%] 800px:w-[50%]">
                    <label className="block pb-2">Email Address</label>
                    <input
                      type="text"
                      className={`${styles.input} !w-[95%] mb-1 800px:mb-0`}
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                <div className="w-full 800px:flex block pb-3">
                  <div className=" w-[100%] 800px:w-[50%]">
                    <label className="block pb-2">Phone Number</label>
                    <input
                      type="number"
                      className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                      required
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>

                  <div className=" w-[100%] 800px:w-[50%]">
                    <label className="block pb-2">Enter your password</label>
                    <input
                      type="password"
                      className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
                <input
                  className={`w-[250px] h-[40px] border border-[#3a24db] text-center text-[#3a24db] rounded-[3px] mt-8 cursor-pointer`}
                  required
                  value="Update"
                  type="submit"
                />
              </form>
            </div>
          </>
        </div>
      )}
      {active > 1 && active < 6 && <AllOrders />}
      {active > 5 && active < 8 && <PaymentMethodsAndAddress active={active} />}
    </div>
  );
};
export default ProfileView;

// payment and Address Components

const PaymentMethodsAndAddress = ({ active }) => {
  const paymentHandel = () => {
    console.log("Payment");
  };
  const addressHandel = () => {
    console.log("Address");
  };
  return (
    <div className="flex w-[90%] flex-col">
      <div className="flex justify-between items-center w-full h-fit">
        <h1 className={`${styles.heading}`}>
          {active === 6 ? "Payment Methods" : "Saved Address"}
        </h1>
        <button
          onClick={active === 6 ? paymentHandel : addressHandel}
          className={`${styles.button} !h-[40px]  flex gap-1   bg-green-700  !w-[110px] text-[#fff] rounded-sm `}
        >
          <AiOutlinePlus size={15} />
          Add New
        </button>
      </div>
      <div className="flex justify-between px-4 items-center *:text-[16px] *:font-[500] bg-white 800px:mt-[40px] mt-[30px] h-[50px] w-full ">
        <div className="flex gap-2 w-fit mt-[5px] h-full justify-center items-center">
          <div
            className={`${
              active === 7 ? "rounded-full w-fit py-1" : "w-[35px] h-[20px]"
            } flex  my-[7.5px] px-[7.5px]  border-[1px] border-blue-800  `}
          >
            {active === 6 ? (
              <img
                className="object-center !w-full "
                src="https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/visa-512.png"
                alt=""
              />
            ) : (
              <div className="flex !text-[10px] font-[500] justify-center items-center !px-[2px] ">
                Home
              </div>
            )}
          </div>
          <div className="flex">Customer Name</div>
        </div>
        <div className="flex justify-center items-center">
          **** **** **** 1236
        </div>
        <div className="flex">
          <AiFillDelete size={20} />
        </div>
      </div>
    </div>
  );
};

// Order ,Tracking and Refund Components

const AllOrders = () => {
  const column = [
    { field: "id", headerName: "Order Id", maxWidth: 150, flex: 0.7 },
    { field: "itemQty", headerName: "Item QTY", maxWidth: 150, flex: 0.7 },
    {
      field: "status",
      headerName: "Status",
      maxWidth: 150,
      flex: 0.7,
      type: "number",
      // cellClassName: (params) => {
      //   return params.getValue(params.id, "status") === "Delivered"
      //     ? "greenColor"
      //     : "redColor";
      // },
    },
    {
      field: "total",
      headerName: "Total",
      maxWidth: 150,
      flex: 0.7,
      type: "number",
    },
    {
      field: " ",
      headerName: "Order Id",
      maxWidth: 150,
      flex: 0.7,
      type: "number",
      renderCell: (param) => {
        return (
          <>
            <Link to={"/user/order/${param.id}"}>
              <AiOutlineArrowRight />
            </Link>
          </>
        );
      },
    },
  ];

  const Orders = [
    {
      _id: "7463hvbfbhfbrtr28820221",
      orderItems: [
        {
          name: "Iphone 14 pro max",
        },
      ],
      totalPrice: 120,
      orderStatus: "Processing",
    },
    {
      _id: "7463hvbfbhfbrtr28820221",
      orderItems: [
        {
          name: "Iphone 14 pro max1",
        },
      ],
      totalPrice: 120,
      orderStatus: "Processing1",
    },
    {
      _id: "7463hvbfbhfbrtr28820221",
      orderItems: [
        {
          name: "Iphone 14 pro max2",
        },
      ],
      totalPrice: 120,
      orderStatus: "Processing2",
    },
    {
      _id: "7463hvbfbhfbrtr28820221",
      orderItems: [
        {
          name: "Iphone 14 pro max3",
        },
      ],
      totalPrice: 120,
      orderStatus: "Processing3",
    },
  ];

  const row = [];
  Orders.map((element, index) => {
    row.push({
      id: element._id,
      itemQty: element.orderItems.length,
      status: element.orderStatus,
      total: element.totalPrice,
    });
  });

  return (
    <div className="div w-11/12">
      <DataGrid
        rows={row}
        columns={column}
        pageSize={10}
        autoHeight
        disableSelectionClick
      />
    </div>
  );
};
