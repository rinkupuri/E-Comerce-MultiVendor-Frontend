import React from "react";
import { productData } from "../../Static/static";
import ProductCard from "../Layout/ProductCard";
import styles from "../../Styles/Style";

const SuggestedSection = () => {
  return (
    <div>
      <div className="flex flex-col my-5">
        <h1 className={`${styles.heading} 800px:justify-start`}>
          Featured Product
        </h1>
        <div className="grid gap-3 my-4 grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
          {productData.slice(0, 6).map((i, index) => {
            return <ProductCard key={index} data={i} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SuggestedSection;
