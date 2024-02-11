import React from "react";
import styles from "../../../Styles/Style";
import { productData } from "../../../Static/static";
import ProductCard from "../../Layout/ProductCard";

const FeaturedProduct = () => {
  return (
    <div>
      <div className={`${styles.section} `}>
        <div className={`${styles.heading}`}>
          <h3>Featured Product</h3>
        </div>
        <div className="grid  place-items-center grid-cols-2 gap-[10px] md:grid-cols-3  md:gap-[20px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] pb-8 border-none">
          {productData?.map((i, index) => (
            <ProductCard data={i} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
