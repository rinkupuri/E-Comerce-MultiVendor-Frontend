import { createAction, createReducer } from "@reduxjs/toolkit";

const LoadSellerRequest = createAction("LoadSellerRequest");
const LoadSellerFailed = createAction("LoadSellerFailed");
const LoadSellerSuccess = createAction("LoadSellerSuccess");
const ClearError = createAction("ClearError");

const INITIAL_STATE = {
  isSellerAuthenticated: false,
  isSellerLoading: true,
  seller: null,
};

export const sellerReducer = createReducer(INITIAL_STATE, (builder) =>
  builder
    .addCase(LoadSellerRequest, (state) => {
      state.isSellerLoading = true;
    })
    .addCase(LoadSellerSuccess, (state, action) => {
      state.isSellerAuthenticated = true;
      state.seller = action.payload;
      state.isSellerLoading = false;
    })
    .addCase(LoadSellerFailed, (state, action) => {
      state.isSellerLoading = false;
      state.seller_error = action.payload;
    })
    .addCase(ClearError, (state) => {
      state.seller_error = null;
    })
);
