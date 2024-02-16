import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from "./Routes.js";
import { SignUpPage, ActivationPage } from "./Routes.js";
import { ToastContainer } from "react-toastify";
import Home from "./Pages/Home";
import CollectionPage from "./Pages/CollectionPage.jsx";
import BestSelling from "./Pages/BestSelling";
import EventsPage from "./Pages/EventsPage";
import FAQPage from "./Pages/FAQ";
import Wishlist from "./Pages/Wishlist";
import ProductPage from "./Pages/ProductPage.jsx";
import Profile from "./Pages/Profile.jsx";
import ShopCreatePage from "./Pages/ShopCreatePage.jsx";
import Store from "./context/Store.js";
import { loadUser } from "./context/actions/user.js";
import { useSelector } from "react-redux";
import PortectedRoute from "./portectedRoute.js";

const App = () => {
  const { loading, isAuthenticated } = useSelector((state) => state.user);
  useEffect(() => {
    return async () => {
      Store.dispatch(loadUser);
    };
  }, []);
  return (
    <>
      {loading ? null : (
        <>
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<SignUpPage />} />
              <Route path="/" element={<Home />} />
              <Route path="/activation/:token" element={<ActivationPage />} />
              <Route path="/product" element={<CollectionPage />} />
              <Route path="/best-selling" element={<BestSelling />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/product/:name" element={<ProductPage />} />
              <Route path="/product/wishlist" element={<Wishlist />} />
              <Route
                path="/profile"
                element={
                  <PortectedRoute isAuthenticated={isAuthenticated}>
                    <Profile />
                  </PortectedRoute>
                }
              />
              <Route
                path="/shop-create"
                element={
                  <PortectedRoute isAuthenticated={isAuthenticated}>
                    <ShopCreatePage />
                  </PortectedRoute>
                }
              />
            </Routes>
          </BrowserRouter>

          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        </>
      )}
    </>
  );
};

export default App;
