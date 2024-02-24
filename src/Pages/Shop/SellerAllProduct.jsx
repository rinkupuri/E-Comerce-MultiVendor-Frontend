import React, { useEffect, useState } from "react";
import ShopLayout from "../../Components/Shop/Layout/ShopLayout";
import { DataGrid } from "@mui/x-data-grid";
import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import Store from "../../context/Store";
import { deleteProduct, getAllProduct } from "../../context/actions/product";
import { useSelector } from "react-redux";
import DashboardSideBar from "../../Components/Shop/Layout/Dashboard/DashboardSidebar";
import { image_Url } from "../../Server/server";
import { useNavigate } from "react-router-dom";

const SellerAllProduct = () => {
  const { isLoading: loading } = useSelector((state) => state.product);
  useEffect(() => {
    return () => {
      Store.dispatch(getAllProduct);
    };
  }, []);
  return (
    <ShopLayout>
      <div className="flex justify-center">
        <div className="flex-[1]">
          <DashboardSideBar />
        </div>
        <div className="flex-[4]">{!loading && <ProductGrid />}</div>
      </div>
    </ShopLayout>
  );
};

const ProductGrid = () => {
  const navigate = useNavigate();
  const { product } = useSelector((state) => state.product);
  const [productData, setProductData] = useState(null);
  useEffect(() => {
    const row = [];

    Array.isArray(product) &&
      product?.map((e) => {
        row.push({
          id: e._id,
          image: `${image_Url}` + e.images[0],
          name: e.name,
          stock: e.stock,
          price: e.discountPrice,
        });
      });
    setProductData(row);
  }, [product]);
  const column = [
    {
      field: "image",
      headerName: "Image",
      maxWidth: "300",
      flex: 0.5,
      renderCell: (params) => {
        return (
          <div className="flex w-10 h-10 ">
            <img
              className="w-10 h-10 rounded-md  object-cover"
              src={params.row.image}
              alt=""
            />
          </div>
        );
      },
    },
    { field: "name", headerName: "Name", maxWidth: "300", flex: 1.5 },
    {
      field: "view",
      headerName: "View",
      maxWidth: "300",
      flex: 0.5,
      renderCell: (params) => {
        return (
          <div className="flex">
            <AiOutlineEye
              size={20}
              onClick={() =>
                navigate(`/product/${params.row.name.replace(/\s/g, " ")}`)
              }
            />
          </div>
        );
      },
    },
    { field: "stock", headerName: "Stock", maxWidth: "300", flex: 1.5 },
    { field: "price", headerName: "Price", maxWidth: "300", flex: 1.5 },
    {
      field: "status",
      headerName: "Status",
      maxWidth: "300",
      flex: 1.5,
      renderCell: (params) => {
        return (
          <div
            className={`flex w-full justify-center items-center ${
              params.row.status === "Active" ? "bg-green-700" : "bg-red-500"
            }`}
          ></div>
        );
      },
    },
    {
      field: "delete",
      headerName: "",
      maxWidth: "300",
      flex: 1.5,
      renderCell: (params) => {
        const handelClick = () => {
          Store.dispatch(deleteProduct(params.id));
        };
        return (
          <div className="flex w-full justify-center items-center ">
            <AiOutlineDelete
              onClick={handelClick}
              size={20}
              className="cursor-pointer"
            />
          </div>
        );
      },
    },
  ];
  return (
    <div className="flex w-full justify-center  h-full">
      {productData && (
        <div className="flex w-11/12 my-5 h-fit">
          <DataGrid rows={productData} columns={column} />
        </div>
      )}
    </div>
  );
};

export default SellerAllProduct;
