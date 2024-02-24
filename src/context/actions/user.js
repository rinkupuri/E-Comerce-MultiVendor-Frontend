import axios from "axios";
import { server } from "../../Server/server";

export const loadUser = async (dispatch) => {
  try {
    dispatch({
      type: "LoadUserRequest",
    });
    const res = await axios.get(`${server}/user/getuser`, {
      withCredentials: true,
    });
    dispatch({
      type: "LoadUserSuccess",
      payload: res.data.user,
    });
  } catch (error) {
    dispatch({
      type: "LoadUserFailed",
      payload: error.responce?.data.message,
    });
  }
};

export const loadSeller = async (dispatch) => {
  try {
    dispatch({
      type: "LoadSellerRequest",
    });
    const res = await axios.get(`${server}/seller/get`, {
      withCredentials: true,
    });
    dispatch({
      type: "LoadSellerSuccess",
      payload: res.data.seller,
    });
  } catch (error) {
    dispatch({
      type: "LoadSellerFailed",
      payload: error.responce?.data.message,
    });
  }
};
