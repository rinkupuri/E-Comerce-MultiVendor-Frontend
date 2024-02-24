import { configureStore } from "@reduxjs/toolkit";
import { userReducers } from "./reducers/user";
import { sellerReducer } from "./reducers/seller";
import productReducer from "./reducers/product";
const Store = configureStore({
  reducer: {
    user: userReducers,
    seller: sellerReducer,
    product: productReducer,
  },
});

export default Store;
