import React, { useEffect } from "react";
import { SignUp } from "../Components/SignUp.jsx";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    console.log(isAuthenticated, user);
    if (isAuthenticated) {
      navigate("/");
    }
  }, []);
  return (
    <div>
      <SignUp />
    </div>
  );
};

export default SignUpPage;
