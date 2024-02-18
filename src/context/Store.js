import { configureStore } from "@reduxjs/toolkit";
import { userReducers } from "./reducers/user";
import { sellerReducer } from "./reducers/seller";
const Store = configureStore({
  reducer: {
    user: userReducers,
    seller: sellerReducer,
  },
});

export default Store;
