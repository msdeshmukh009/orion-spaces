import { createSlice } from "@reduxjs/toolkit";
import { getUsers, updateUser } from "./helpers";

const initialState = {
  isLoading: false,
  error: "",
  users: [],
};

const extraReducers = {
  [getUsers.pending]: state => {
    state.isLoading = true;
    state.error = "";
  },
  [getUsers.fulfilled]: (state, { payload }) => {
    state.isLoading = false;
    state.users = payload;
  },
  [getUsers.rejected]: (state, { payload }) => {
    state.isLoading = true;
    state.error = payload;
  },
  [updateUser.pending]: state => {
    state.isLoading = true;
    state.error = "";
  },
  [updateUser.fulfilled]: (state, { payload }) => {
    state.isLoading = false;
    state.users = state.users.map(user => (user.username === payload.username ? payload : user));
  },
  [updateUser.rejected]: (state, { payload }) => {
    state.isLoading = false;
    state.error = payload;
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoading: state => {
      state.isLoading = true;
    },
  },
  extraReducers,
});

export const { setLoading } = userSlice.actions;

export default userSlice.reducer;
