import { createAction, createReducer } from "@reduxjs/toolkit";

const LoadUserRequest = createAction("LoadUserRequest");
const LoadUserSuccess = createAction("LoadUserSuccess");
const LoadUserFailed = createAction("LoadUserFailed");
const ClearError = createAction("ClearError");
const ActivePage = createAction("ActivePage");

const INITIAL_STATE = {
  isAuthenticated: false,
  user: null,
  loading: true,
};

export const userReducers = createReducer(
  INITIAL_STATE,

  (builder) => {
    builder
      .addCase(LoadUserRequest, (state) => {
        state.loading = true;
      })
      .addCase(LoadUserSuccess, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload;
      })
      .addCase(LoadUserFailed, (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload;
      })
      .addCase(ClearError, (state) => {
        state.error = null;
      })
      .addCase(ActivePage, (state, action) => {
        state.activePage = action.payload;
      });
  }
);
