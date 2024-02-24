import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { server } from "../../Server/server";
import { toast } from "react-toastify";

const SellerActivationPage = () => {
  const { token } = useParams();
  const [error, setError] = useState(null);
  useEffect(() => {
    return () => {
      axios
        .post(
          `${server}/seller/activation`,
          {
            token: token,
          },
          { withCredentials: true }
        )
        .then((response) => {
          toast.success(response.data.message);
        })
        .catch((err) => {
          toast.error("Tocken Expired");
          setError(err);
        });
    };
  }, []);

  return (
    <div className="flex items-center justify-center w-full h-[100vh]">
      {error ? <p>Your Tocken is Expire</p> : <p>Your Account is Activated</p>}
    </div>
  );
};

export default SellerActivationPage;
