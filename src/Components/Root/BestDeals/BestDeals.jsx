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
      <div className="grid grid-cols-1 gap-[5px] md:grid-cols-2 md:gap-[10px] lg:grid-cols-4 lg:gap-[20px] xl:grid-cols-5 xl:gap-[30px]">
        {data?.map((i, index) => (
          <ProductCard key={index} data={i} />
        ))}
      </div>
    </div>
  );
};

export default BestDeals;
