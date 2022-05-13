import { createSlice } from "@reduxjs/toolkit";
import { loginHelper, signupHelper } from "./helpers";

const initialState = {
  token: localStorage.getItem("Spaces_User")?.token || "",
  userData: localStorage.getItem("Spaces_User")?.userData || {},
  isLoading: false,
  error: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: state => {
      localStorage.removeItem("Spaces_User");
      state.token = "";
      state.userData = {};
    },
  },
  extraReducers: {
    [loginHelper.pending]: state => {
      state.isLoading = true;
    },
    [loginHelper.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.token = payload.encodedToken;
      state.userData = payload.foundUser;
      state.error = "";
    },
    [loginHelper.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [signupHelper.pending]: state => {
      state.isLoading = true;
    },
    [signupHelper.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.token = payload.encodedToken;
      state.userData = payload.createdUser;
      state.error = "";
    },
    [signupHelper.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
