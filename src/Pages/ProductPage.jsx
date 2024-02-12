import React, { useEffect, useState } from "react";
import { productData } from "../Static/static";
import ProductCard from "../Components/Layout/ProductCard";
import { useNavigate, useSearchParams } from "react-router-dom";
import FilterDropDown from "../Components/FilterDropDown/FilterDropDown.jsx";
import Layout from "../Components/Layout/Layout";
import styles from "../Styles/Style";
import Footer from "../Components/Route/Footer/Footer.jsx";

const ProductPage = () => {
  const [data, setData] = useState(null);
  const nevigate = useNavigate();
  const [categories] = useSearchParams();
  const search = categories.get("categories");
  useEffect(() => {
    if (search) {
      const serachModified = search.replace(/\-/g, " ");
      const name = serachModified.split(",");
      const pdata = productData.filter((element) => {
        return name.includes(element.category);
      });
      setData(pdata);
    } else {
      setData(productData);
    }
  }, [categories]);
  const removeFilterHandel = () => {
    nevigate("/product");
  };

  return (
    <Layout>
      <div className="productpage  relative 800px:flex w-full">
        <div className="hidden 800px:block w-[300px] ">
          <FilterDropDown page={"product"} />
        </div>

        <div className={`${styles.section} h-fit w-full pr-10 `}>
          {data && data.toString() ? (
            <div className="grid  py-6 place-items-center grid-cols-2 gap-[10px] md:grid-cols-3  md:gap-[20px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] pb-8 border-none">
              {
                // data ? (
                data?.map((i, index) => {
                  return <ProductCard data={i} key={index} />;
                })
              }
            </div>
          ) : (
            <div className="flex justify-center items-center  gap-3 flex-col h-full w-full">
              <h1>No Product Found...</h1>
              <button
                onClick={removeFilterHandel}
                className={`${styles.button} text-[#fff] `}
              >
                Remove Filter
              </button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default ProductPage;
