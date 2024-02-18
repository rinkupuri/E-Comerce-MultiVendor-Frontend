import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from "./Routes/Routes.js";
import {
  SignUpPage,
  ActivationPage,
  SellerActivationPage,
  SellerLoginPage,
  SellerHome,
} from "./Routes/Routes.js";
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
import { loadSeller, loadUser } from "./context/actions/user.js";
import { useSelector } from "react-redux";
import {
  PortectedRoute,
  SellerProtectedRoute,
} from "./Routes/portectedRoute.js";

const App = () => {
  const { loading } = useSelector((state) => state.user);
  const { isSellerloading } = useSelector((state) => state.seller);
  useEffect(() => {
    return async () => {
      Store.dispatch(loadUser);
      Store.dispatch(loadSeller);
    };
  }, []);

  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter> */}
      {loading && !isSellerloading && (
        <>
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/login-seller" element={<SellerLoginPage />} />
              <Route path="/register" element={<SignUpPage />} />
              <Route path="/" element={<Home />} />
              <Route path="/product" element={<CollectionPage />} />
              <Route path="/best-selling" element={<BestSelling />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/product/:name" element={<ProductPage />} />
              <Route
                path="/user/activation/:token"
                element={<ActivationPage />}
              />
              <Route
                path="/seller/activation/:token"
                element={<SellerActivationPage />}
              />
              <Route path="/product/wishlist" element={<Wishlist />} />
              <Route
                path="/profile"
                element={
                  <PortectedRoute>
                    <Profile />
                  </PortectedRoute>
                }
              />
              <Route
                path="/dashboard"
                element={
                  <SellerProtectedRoute>
                    <SellerHome />
                  </SellerProtectedRoute>
                }
              />
              <Route path="/shop-create" element={<ShopCreatePage />} />
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
