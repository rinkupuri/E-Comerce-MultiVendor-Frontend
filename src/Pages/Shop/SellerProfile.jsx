import React from "react";
import { useSelector } from "react-redux";
import { image_Url } from "../../Server/server";
import styles from "../../Styles/Style";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";

const SellerProfile = () => {
  const { seller } = useSelector((state) => state.seller);

  return (
    <div>
      <div className="flex w-full justify-center items-center h-screen bg-slate-500">
        <div className="flex-[1] w-full h-full flex justify-center items-center">
          <div className=" bg-white h-[80%] rounded-sm w-9/12 overflow-y-scroll">
            <div className="flex my-4 w-full h-fit  justify-center items-center">
              <img
                className="w-[100px] h-[100px] rounded-full object-cover"
                src={`${image_Url}${seller.avatar.url}`}
                alt=""
              />
            </div>
            <div className="flex w-full justify-center items-center">
              <h2 className="font-[600] text-[22px]">{seller.name}</h2>
            </div>
            <div className="flex flex-col mx-6 my-2">
              <h3 className="font-[600] text-[18px]">Address</h3>
              <p className="font-[400] text-[14px] text-gray-500">
                {seller.addresses[0].address1}
              </p>
              <div className="flex"></div>
            </div>
            <div className="flex flex-col mx-6 my-2">
              <h3 className="font-[600] text-[18px]">Phone</h3>
              <p className="font-[400] text-[14px] text-gray-500">
                {seller.phoneNumber}
              </p>
              <div className="flex"></div>
            </div>
            <div className="flex flex-col mx-6 my-2">
              <h3 className="font-[600] text-[18px]">City</h3>
              <p className="font-[400] text-[14px] text-gray-500">
                {seller.addresses[0].city}
              </p>
              <div className="flex"></div>
            </div>
            <div className="flex flex-col mx-6 my-2">
              <h3 className="font-[600] text-[18px]">State</h3>
              <p className="font-[400] text-[14px] text-gray-500">
                {seller.addresses[0].country}
              </p>
              <div className="flex"></div>
            </div>
            <div className="flex justify-center items-center w-full">
              <button
                className={`${styles.button} text-white !rounded-sm !w-9/12`}
              >
                Edit profile
              </button>
            </div>
            <div className="flex justify-center items-center w-full">
              <button
                className={`${styles.button} text-white !rounded-sm !w-9/12`}
              >
                Edit profile
              </button>
            </div>
          </div>
        </div>
        <div className="flex-[3] py-5">
          <div className={`flex ${styles.section} flex-col  w-full h-screen`}>
            <div
              className={` px-8 flex w-full h-[70px]  justify-between items-center`}
            >
              <h1 className={`${styles.section} text-[30px]  `}>Products</h1>
              <button className={`${styles.button} !rounded-sm bg-green-700`}>
                Add Product
              </button>
            </div>
            <Productable />
          </div>
        </div>
      </div>
    </div>
  );
};

const Productable = () => {
  const productDume = [
    {
      id: "djnjdfnjkd1",
      name: "white T shirt",
      Sku: "Tshit-Dev",
      status: "Active",
      image:
        "https://img.freepik.com/free-psd/isolated-white-t-shirt-front-view_125540-1194.jpg",
    },
    {
      id: "djnjdfnjcxvkd2",
      name: "white T shirt2",
      Sku: "Tshit-Dev",
      status: "Active",
      image:
        "https://img.freepik.com/free-psd/isolated-white-t-shirt-front-view_125540-1194.jpg",
    },
    {
      id: "djnjdfnfdgjkd3",
      name: "white T shirt3",
      Sku: "Tshit-Dev",
      status: "Active",
      image:
        "https://img.freepik.com/free-psd/isolated-white-t-shirt-front-view_125540-1194.jpg",
    },
    {
      id: "djnjdfnsdjkd4",
      name: "white T shirt4",
      Sku: "Tshit-Dev",
      status: "Active",
      image:
        "https://img.freepik.com/free-psd/isolated-white-t-shirt-front-view_125540-1194.jpg",
    },
  ];
  const columns = [
    {
      field: "image",
      headerName: "Image",
      maxWidth: 200,
      flex: 0.5,
      renderCell: (params) => {
        return (
          <div className="flex">
            <img
              className="w-10 h-10 object-cover rounded-sm"
              src={params?.row?.image}
              alt=""
            />
          </div>
        );
      },
    },
    { field: "id", headerName: "Product Id", maxWidth: 200, flex: 1 },
    {
      field: "",
      headerName: "View Product",
      maxWidth: 200,
      flex: 1,
      renderCell: (params) => {
        return (
          <div className="flex w-8/12 justify-center items-center">
            <Link to={`/product/${(params?.row?.name).replace(/\s/g, "-")}`}>
              <AiOutlineEye size={20} />
            </Link>
          </div>
        );
      },
    },
    { field: "Sku", headerName: "SKU", maxWidth: 200, flex: 1 },
    { field: "name", headerName: "Name", maxWidth: 200, flex: 1 },
    {
      field: "status",
      headerName: "Status",
      maxWidth: 200,
      flex: 1,
      renderCell: (params) => {
        return (
          <div
            className={`${
              params?.row?.status === "Active" ? "bg-green-600" : "bg-red-600"
            } flex w-full items-center h-full justify-center`}
          >
            {params?.row?.status}
          </div>
        );
      },
    },
  ];
  return (
    <div className="flex w-11/12 h-fit">
      <DataGrid
        rows={productDume}
        columns={columns}
        pageSizeOptions={[10, 20, 100]}
        disableSelectionClick
        checkboxSelection
      />
    </div>
  );
};

export default SellerProfile;
