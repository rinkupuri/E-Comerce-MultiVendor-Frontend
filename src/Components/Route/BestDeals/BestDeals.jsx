import React, { useEffect, useState } from "react";
import styles from "../../../Styles/Style";
import { productData } from "../../../Static/static";
import ProductCard from "../../Layout/ProductCard.jsx";

const BestDeals = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const dealsData = productData?.sort((a, b) => b.total_sell - a.total_sell);
    const deals = dealsData.slice(0, 5);
    setData(deals);
  }, []);
  return (
    <div className={`${styles.section}`}>
      <div className={`${styles.heading}`}>
        <h1>Best Deals</h1>
      </div>
      <div className="grid  place-items-center grid-cols-2 gap-[10px] md:grid-cols-3  md:gap-[20px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] pb-8 border-none">
        {data?.map((i, index) => (
          <ProductCard key={index} data={i} />
        ))}
      </div>
    </div>
  );
};

export default BestDeals;
