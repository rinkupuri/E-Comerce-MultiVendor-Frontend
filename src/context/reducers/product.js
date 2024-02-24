import { createAction, createReducer } from "@reduxjs/toolkit";

const LoadProductStart = createAction("LoadProductStart");
const LoadProductSuccess = createAction("LoadProductSuccess");
const LoadProductFailed = createAction("LoadProductFailed");
const ClearError = createAction("ClearError");
const GetAllProductsSuccess = createAction("GetAllProductsSuccess");
const GetAllProductFailed = createAction("GetAllProductFailed");
const GetAllProductStart = createAction("GetAllProductStart");
const DeleteProductSuccess = createAction("DeleteProductSuccess");
const DeleteProductFailed = createAction("DeleteProductFailed");
const DeleteProductStart = createAction("DeleteProductStart");
const GetProductsSuccess = createAction("GetProductsSuccess");
const GetProductFailed = createAction("GetProductFailed");
const GetProductStart = createAction("GetProductStart");

const INITIALSTATE = {
  isLoading: true,
};

const productReducer = createReducer(INITIALSTATE, (builder) =>
  builder
    .addCase(LoadProductStart, (state) => {
      state.isLoading = true;
    })
    .addCase(LoadProductSuccess, (state, action) => {
      state.product = action.payload;
      state.isLoading = false;
    })
    .addCase(LoadProductFailed, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    })
    .addCase(GetAllProductsSuccess, (state, action) => {
      state.isLoading = false;
      state.product = action.payload;
    })
    .addCase(GetAllProductFailed, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })
    .addCase(GetAllProductStart, (state) => {
      state.isLoading = true;
    })
    .addCase(DeleteProductSuccess, (state, action) => {
      state.isLoading = false;
      state.product = action.payload;
    })
    .addCase(DeleteProductFailed, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })
    .addCase(DeleteProductStart, (state) => {
      state.isLoading = true;
    })
    .addCase(GetProductsSuccess, (state, action) => {
      state.isLoading = false;
      state.product = action.payload;
    })
    .addCase(GetProductFailed, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })
    .addCase(GetProductStart, (state) => {
      state.isLoading = true;
    })
    .addCase(ClearError, (state) => {
      state.error = null;
    })
);

export default productReducer;
