import React, { useEffect, useState } from "react";
import Store from "../../../context/Store";
import { getAllProduct } from "../../../context/actions/product";
import { useSelector } from "react-redux";

const CreateEvent = () => {
  const [chooseProduct, setChooseProduct] = useState();
  const [productData, setproductData] = useState();
  const { product } = useSelector((state) => state.product);

  useEffect(() => {
    return () => {
      Store.dispatch(getAllProduct);
    };
  }, []);
  useEffect(() => {
    setproductData(product);
  }, [product]);

  return (
    <div className="flex w-full h-screen justify-center items-center">
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Create Event
          </h2>
          <form className="flex flex-col">
            <label htmlFor="productChosse"></label>
            <select name="productChosse" id="productChosse">
              {productData?.map((e) => (
                <option value={e.name}>{e.name}</option>
              ))}
            </select>
            <input
              type="text"
              className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              placeholder="Product SKU"
            />
            <input
              type="email"
              className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              placeholder="Event Start Date "
            />
            <input
              type="text"
              className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              placeholder="Event end Date"
            />
            <input
              type="text"
              className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              placeholder="LinkedIn Profile URL"
            />
            <textarea
              name="cover_letter"
              className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              placeholder="Cover Letter"
              defaultValue={""}
            />
            <input
              type="file"
              className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              placeholder="Resume"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
            >
              Apply
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;
