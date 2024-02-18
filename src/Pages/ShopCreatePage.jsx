import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../Styles/Style";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import axios from "axios";
import { server } from "../Server/server";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CircularProgress from "@mui/material/CircularProgress";
import { useSelector } from "react-redux";

const ShopCreatePage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [address, setAddress] = useState();
  const [address2, setAddress2] = useState();
  const [city, setCity] = useState();
  const [country, setCountry] = useState();
  const [zipCode, setZipCode] = useState();
  const [password, setPassword] = useState();
  const [avatar, setAvatar] = useState();
  const [visible, setVisible] = useState();
  const [loading, setLoading] = useState(false);
  const { isSellerAuthenticated, seller } = useSelector(
    (state) => state.seller
  );
  useEffect(() => {
    if (isSellerAuthenticated) {
      navigate(`/dashboard`);
    }
  }, [isSellerAuthenticated]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const config = { headers: { "Content-Type": "multipart/form-data" } };
    const newForm = new FormData();

    newForm.append("file", avatar);

    newForm.append("name", name);
    newForm.append("email", email);
    newForm.append("password", password);
    newForm.append("phone", phoneNumber);
    newForm.append("address", address);
    newForm.append("address2", address2);
    newForm.append("city", city);
    newForm.append("country", country);
    newForm.append("zipcode", zipCode);
    try {
      const res = await axios.post(
        `${server}/seller/create-shop`,
        newForm,
        config
      );
      const message = res.data.message;
      toast.success(message);
      setLoading(false);
    } catch (error) {
      const message = error.response.data.message;
      toast.error(message);
      setLoading(false);
    }
  };
  const handelFileChanged = (e) => {
    const file = e.target.files[0];
    setAvatar(file);
  };
  return (
    <>
      {!isSellerAuthenticated && (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Register Seller Acount
            </h2>
          </div>
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <div className="mt-1">
                    <input
                      type="name"
                      name="name"
                      autoComplete="name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email address
                  </label>
                  <div className="mt-1">
                    <input
                      type="email"
                      name="email"
                      autoComplete="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone
                  </label>
                  <div className="mt-1">
                    <input
                      type="tel"
                      name="phone"
                      autoComplete="phone"
                      required
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Address
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="address"
                      autoComplete="address"
                      required
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="address2"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Address2
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="address"
                      autoComplete="address"
                      required
                      value={address2}
                      onChange={(e) => setAddress2(e.target.value)}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-gray-700"
                  >
                    City
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="city"
                      autoComplete="city"
                      required
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="country"
                      autoComplete="country"
                      required
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="zipcode"
                    className="block text-sm font-medium text-gray-700"
                  >
                    ZipCode
                  </label>
                  <div className="mt-1">
                    <input
                      type="number"
                      name="zipcode"
                      autoComplete="zipcode"
                      required
                      value={zipCode}
                      onChange={(e) => setZipCode(e.target.value)}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <div className="mt-1 relative">
                    <input
                      type={visible ? "text" : "password"}
                      name="password"
                      autoComplete="current-password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                    {visible ? (
                      <AiOutlineEye
                        className="absolute right-2 top-2 cursor-pointer"
                        size={25}
                        onClick={() => setVisible(false)}
                      />
                    ) : (
                      <AiOutlineEyeInvisible
                        className="absolute right-2 top-2 cursor-pointer"
                        size={25}
                        onClick={() => setVisible(true)}
                      />
                    )}
                  </div>
                </div>
                <div
                  className={`${styles.noramlFlex}  justify-center  relative gap-[10px] h-10`}
                >
                  <label
                    className="flex cursor-pointer hover:bg-gray-100 px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                    htmlFor="file"
                  >
                    {avatar ? (
                      <>
                        <img
                          src={URL.createObjectURL(avatar)}
                          className=" h-8 w-8 m-1  rounded-full object-cover"
                        />
                        <span
                          className={`${styles.noramlFlex} text-gray-700 text-xs  justify-center `}
                        >
                          Click to Change Image
                        </span>
                      </>
                    ) : (
                      <>
                        <RxAvatar className=" h-8 w-8 m-1  rounded-full" />
                        <span
                          className={`${styles.noramlFlex} text-gray-700 text-xs  justify-center `}
                        >
                          Uplaod an Image
                        </span>
                      </>
                    )}

                    <input
                      type="file"
                      onChange={handelFileChanged}
                      className="hidden"
                      id="file"
                      accept=".jpg,.jpeg,.png,.webp"
                    />
                  </label>
                </div>
                <div>
                  <button
                    disabled={loading}
                    type="submit"
                    className="disabled:cursor-not-allowed group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                  >
                    {loading ? <CircularProgress size="15px" /> : "Submit"}
                  </button>
                </div>
                <div className={`${styles.noramlFlex} w-full`}>
                  <h4>Already have an account?</h4>
                  <Link to="/login-seller" className="text-blue-600 pl-2">
                    Login
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ShopCreatePage;
