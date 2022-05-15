import { createSlice } from "@reduxjs/toolkit";
import { getUsers, updateUser, followUser, unFollowUser } from "./helpers";

const initialState = {
  isLoading: false,
  uploadingPhoto: false,
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
    state.uploadingPhoto = true;
    state.error = "";
  },
  [updateUser.fulfilled]: (state, { payload }) => {
    state.uploadingPhoto = false;
    state.users = state.users.map(user => (user.username === payload.username ? payload : user));
  },
  [updateUser.rejected]: (state, { payload }) => {
    state.uploadingPhoto = false;
    state.error = payload;
  },
  [followUser.pending]: state => {
    state.isLoading = true;
    state.error = "";
  },
  [followUser.fulfilled]: (state, { payload }) => {
    state.users = state.users.map(user => {
      if (user.username === payload.followUser.username) {
        return payload.followUser;
      }
      if (user.username === payload.user.username) {
        return payload.user;
      }
      return user;
    });
    state.isLoading = false;
  },
  [followUser.rejected]: (state, { payload }) => {
    state.isLoading = false;
    state.error = payload;
  },
  [unFollowUser.pending]: state => {
    state.isLoading = true;
    state.error = "";
  },
  [unFollowUser.fulfilled]: (state, { payload }) => {
    state.users = state.users.map(user => {
      if (user.username === payload.followUser.username) {
        return payload.followUser;
      }
      if (user.username === payload.user.username) {
        return payload.user;
      }
      return user;
    });
    state.isLoading = false;
  },
  [unFollowUser.rejected]: (state, { payload }) => {
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
    startUploading: state => {
      state.uploadingPhoto = true;
    },
  },
  extraReducers,
});

export const { setLoading, startUploading } = userSlice.actions;

export default userSlice.reducer;
