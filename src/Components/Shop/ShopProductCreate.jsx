import React, { useRef } from "react";
import styles from "../../Styles/Style";
import { useSelector } from "react-redux";
import Store from "../../context/Store";
import { createProduct } from "../../context/actions/product";
import { useNavigate } from "react-router-dom";

const ShopProductCreate = () => {
  const navigate = useNavigate();
  const { seller } = useSelector((state) => state.seller);
  const Name = useRef();
  const Description = useRef();
  const Catogries = useRef();
  const Tags = useRef();
  const Stock = useRef();
  const Price = useRef();
  const File = useRef();
  const MRP = useRef();
  const handelSumbit = () => {
    const newForm = new FormData();
    newForm.append("name", Name.current.value);
    newForm.append("description", Description.current.value);
    newForm.append("categories", "Iphone");
    newForm.append("tags", Tags.current.value);
    newForm.append("originalPrice", Price.current.value);
    newForm.append("discountPrice", MRP.current.value);
    newForm.append("stock", Stock.current.value);
    const filess = File.current.files;
    Array.from(filess).map((e) => newForm.append("images", e));
    newForm.append("shopId", seller._id);
    console.log(seller._id);
    Store.dispatch(createProduct(newForm));
    navigate("/dashboard");
  };

  return (
    <div className="flex justify-center items-center my-7 w-full h-screen">
      <div className="flex w-11/12 800px:w-11/12 rounded-sm h-screen ">
        <div className="flex gap-3 flex-col w-[60%]">
          <h1 className={`${styles.heading}`}>Product Page</h1>
          <div className="w-full flex flex-col gap-3 bg-white p-10 rounded-md h-fit">
            <div className="flex gap-3 flex-col">
              <h1>
                Name <span>*</span>
              </h1>
              <input
                className="text-[#000] rounded-sm p-2 border-[1px] border-[#000] placeholder:text-gray-500"
                type="text"
                name="productname"
                ref={Name}
                placeholder="Product Name"
                id="productname"
              />
            </div>

            <div className="flex gap-3 flex-col">
              <h1>
                Description <span>*</span>
              </h1>
              <input
                className="text-[#000] rounded-sm p-2 border-[1px] border-[#000] placeholder:text-gray-500"
                type="text"
                name="productDescription"
                ref={Description}
                placeholder="Product Description"
                id="productDescription"
              />
            </div>
            <div className="flex gap-3 flex-col">
              <h1>
                Tags <span>*</span>
              </h1>
              <input
                className="text-[#000] rounded-sm p-2 border-[1px] border-[#000] placeholder:text-gray-500"
                type="text"
                name="productTags"
                ref={Tags}
                placeholder="Product Tags"
                id="productTags"
              />
            </div>
            <div className="flex gap-3 flex-col">
              <h1>
                Price <span>*</span>
              </h1>
              <input
                className="text-[#000] rounded-sm p-2 border-[1px] border-[#000] placeholder:text-gray-500"
                type="text"
                name="productPrice"
                ref={Price}
                placeholder="Product Price"
                id="productPrice"
              />
            </div>
            <div className="flex gap-3 flex-col">
              <h1>
                MRP Price <span></span>
              </h1>
              <input
                className="text-[#000] rounded-sm p-2 border-[1px] border-[#000] placeholder:text-gray-500"
                type="text"
                name="productmrpprice"
                ref={MRP}
                placeholder="Product MRP"
                id="productmrpprice"
              />
            </div>
            <div className="flex gap-3 flex-col">
              <h1>
                Stock <span>*</span>
              </h1>
              <input
                className="text-[#000] rounded-sm p-2 border-[1px] border-[#000] placeholder:text-gray-500"
                type="text"
                name="stock"
                ref={Stock}
                placeholder="Product Stock"
                id="stock"
              />
            </div>
            <div className="flex gap-3 flex-col">
              <h1>
                File <span></span>
              </h1>
              <input
                className="text-[#000] rounded-sm p-2 border-[1px] border-[#000] placeholder:text-gray-500"
                type="file"
                name="productFile"
                ref={File}
                multiple={true}
                placeholder="Product File"
                id="productFile"
              />
            </div>
            <div className="flex gap-3 flex-col">
              <button
                onClick={handelSumbit}
                className={`${styles.button} w-full !rounded-sm text-[#fff] `}
              >
                Add New
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopProductCreate;
