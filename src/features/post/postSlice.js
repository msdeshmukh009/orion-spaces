import { createSlice } from "@reduxjs/toolkit";
import { getAllPosts, addPost, editPost, deletePost } from "./helpers";

const initialState = {
  isLoading: false,
  posts: [],
  error: "",
  showPostModal: false,
  editPostObj: null,
};

const extraReducers = {
  [getAllPosts.pending]: state => {
    state.isLoading = true;
    state.error = "";
  },
  [getAllPosts.fulfilled]: (state, { payload }) => {
    state.isLoading = false;
    state.posts = payload.reverse();
  },
  [getAllPosts.rejected]: (state, { payload }) => {
    state.isLoading = false;
    state.error = payload;
  },
  [addPost.fulfilled]: (state, { payload }) => {
    state.posts = payload.reverse();
    state.error = "";
  },
  [addPost.rejected]: (state, { payload }) => {
    state.error = payload;
  },
  [editPost.fulfilled]: (state, { payload }) => {
    state.posts = payload.reverse();
    state.error = "";
  },
  [editPost.rejected]: (state, { payload }) => {
    state.error = payload;
  },
  [deletePost.fulfilled]: (state, { payload }) => {
    state.posts = payload.reverse();
    state.error = "";
  },
  [deletePost.rejected]: (state, { payload }) => {
    state.error = payload;
  },
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    openPostModal: state => {
      state.showPostModal = true;
    },
    closePostModal: state => {
      state.showPostModal = false;
    },
    setEditPostObj: (state, { payload }) => {
      state.editPostObj = payload;
    },
  },
  extraReducers,
});

export const { openPostModal, closePostModal, setEditPostObj } = postSlice.actions;

export default postSlice.reducer;