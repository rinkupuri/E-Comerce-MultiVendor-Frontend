import React, { useEffect } from "react";
import Store from "../context/Store";
import { loadUser } from "../context/actions/user";
import Header from "../Components/Layout/Header";
import Layout from "../Components/Layout/Layout";
import Hero from "../Components/Route/Hero/Hero";
import Catogries from "../Components/Route/Catogries/Catogries";
import BestDeals from "../Components/Route/BestDeals/BestDeals";
import FeaturedProduct from "../Components/Route/FeaturedProduct/FeaturedProduct";
import Events from "../Components/Route/Events/Events";
import Sponsored from "../Components/Sponsored/Sponsored";
import Footer from "../Components/Route/Footer/Footer.jsx";

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
        <FeaturedProduct />
        <Events />
        <Sponsored />
        <Footer />
      </Layout>
    </div>
  );
};

export default Home;
