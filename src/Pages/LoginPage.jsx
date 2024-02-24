import React, { useEffect } from "react";
import Login from "../Components/Login.jsx";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  console.log("Normal Login");
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);
  return <>{!isAuthenticated && <Login />}</>;
};

export default LoginPage;
