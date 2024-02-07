import { createAction, createReducer } from "@reduxjs/toolkit";

const LoadUserRequest = createAction("LoadUserRequest");
const LoadUserSuccesss = createAction("LoadUserSuccesss");
const LoadUserFail = createAction("LoadUserFail");
const ClearError = createAction("ClearError");

const INITIAL_STATE = {
  isAuthenticated: true,
};

export const userReducers = createReducer(
  INITIAL_STATE,

  (builder) => {
    builder
      .addCase(LoadUserRequest, (state) => {
        state.loading = true;
      })
      .addCase(LoadUserSuccesss, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload;
      })
      .addCase(LoadUserFail, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload;
      })
      .addCase(ClearError, (state) => {
        state.error = null;
      });
  }
);
