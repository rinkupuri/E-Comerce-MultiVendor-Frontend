import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from "./Routes.js";
import { SignUpPage, ActivationPage } from "./Routes.js";
import { Bounce, ToastContainer } from "react-toastify";
import Home from "./Pages/Home";
import ProductPage from "./Pages/ProductPage";
import BestSelling from "./Pages/BestSelling.jsx";
import EventsPage from "./Pages/EventsPage.jsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<SignUpPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/activation/:token" element={<ActivationPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/best-selling" element={<BestSelling />} />
          <Route path="/events" element={<EventsPage />} />
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
  );
};

export default App;
