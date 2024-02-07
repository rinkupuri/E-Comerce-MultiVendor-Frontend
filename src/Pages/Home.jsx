import React, { useEffect } from "react";
import Store from "../context/Store";
import { loadUser } from "../context/actions/user";
import Header from "../Components/Layout/Header";
import Layout from "../Components/Layout/Layout";
import Hero from "../Components/Root/Hero/Hero";
import Catogries from "../Components/Root/Catogries/Catogries";
import BestDeals from "../Components/Root/BestDeals/BestDeals.jsx";

const Home = () => {
  useEffect(() => {
    return async () => {
      // Store.dispatch(loadUser);
    };
  }, []);
  return (
    <div>
      <Layout>
        <Hero />
        <Catogries />
        <BestDeals />
      </Layout>
    </div>
  );
};

export default Home;
