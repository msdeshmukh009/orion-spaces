import { createSlice } from "@reduxjs/toolkit";
import { getUsers, updateUser, followUser, unFollowUser } from "./helpers";

const initialState = {
  isLoading: false,
  uploadingPhoto: false,
  error: "",
  users: [],
  searchTerm: "",
  foundUsers: [],
  currentTheme: localStorage.getItem("spaces-theme") || "dark",
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
    searchUser: (state, { payload }) => {
      state.searchTerm = payload;
      state.foundUsers = state.users.filter(
        user =>
          user.username.toLowerCase().includes(payload.trim().toLowerCase()) ||
          user.firstName.toLowerCase().includes(payload.trim().toLowerCase()) ||
          user.lastName.toLowerCase().includes(payload.trim().toLowerCase())
      );
    },
    toggleTheme: state => {
      if (state.currentTheme === "dark") {
        state.currentTheme = "";
        localStorage.setItem("spaces-theme", "light");
      } else {
        state.currentTheme = "dark";
        localStorage.setItem("spaces-theme", "dark");
      }
    },
  },
  extraReducers,
});

export const { setLoading, startUploading, searchUser, toggleTheme } = userSlice.actions;

export default userSlice.reducer;
