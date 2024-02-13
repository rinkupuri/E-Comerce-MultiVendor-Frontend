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
    console.log(res.status);
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
