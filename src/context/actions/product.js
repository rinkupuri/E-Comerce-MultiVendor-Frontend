import React from "react";
import axios from "axios";
import { server } from "../../Server/server";
import { toast } from "react-toastify";
import Store from "../Store";

// Create new product route

export const createProduct = (newForm) => async (dispatch) => {
  const config = {
    headers: {
      "Content-type": "multipart/formdata",
    },
    withCredentials: true,
  };

  try {
    dispatch({ type: "LoadProductStart" });
    const res = await axios.post(`${server}/product/create`, newForm, config);
    console.log(res);
    dispatch({
      type: "LoadProductSuccess",
      payload: res,
    });
    toast.success("Product created Succesfull");
  } catch (error) {
    dispatch({
      type: "LoadProductFailed",
      payload: error.responce?.data?.message,
    });
  }
};

// get All Product action

export const getAllProduct = async (dispatch) => {
  try {
    dispatch({ type: "GetAllProductStart" });
    const { data } = await axios.get(`${server}/product/seller/getAll`, {
      withCredentials: true,
    });

    dispatch({ type: "GetAllProductsSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "GetAllProductFailed", payload: error });
  }
};

// delete product action
export const deleteProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: "DeleteProductStart" });
    const res = await axios.post(`${server}/product/delete/${id}`, null, {
      withCredentials: true,
    });
    dispatch({ type: "DeleteProductSuccess", payload: res });
    Store.dispatch(getAllProduct);
  } catch (error) {
    dispatch({ type: "DeleteProductFailed", payload: error });
  }
};

// get Single Product

export const getProduct = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "GetProductStart",
    });
    const { data } = await axios.get(`${server}/product/get/${id}`, null, {
      withCredentials: true,
    });
    dispatch({
      type: "GetProductsSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "GetProductFailed",
      payload: error,
    });
  }
};
