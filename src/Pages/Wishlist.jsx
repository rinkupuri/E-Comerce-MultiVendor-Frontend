import React from "react";
import Layout from "../Components/Layout/Layout";
import { productData } from "../Static/static";
import ProductCard from "../Components/Layout/ProductCard";
import styles from "../Styles/Style";

const Wishlist = () => {
  return (
    <Layout>
      <div className={`${styles.section}`}>
        <div className="grid  py-6 place-items-center grid-cols-2 gap-[10px] md:grid-cols-3  md:gap-[20px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] pb-8 border-none">
          {productData.map((i, index) => {
            return <ProductCard key={index} data={i} />;
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Wishlist;
