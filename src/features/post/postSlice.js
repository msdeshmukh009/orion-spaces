import { createSlice } from "@reduxjs/toolkit";
import {
  getAllPosts,
  addPost,
  editPost,
  deletePost,
  addComment,
  deleteComment,
  editComment,
  addLike,
  deleteLike,
} from "./helpers";

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
    state.posts = payload;
  },
  [getAllPosts.rejected]: (state, { payload }) => {
    state.isLoading = false;
    state.error = payload;
  },
  [addPost.fulfilled]: (state, { payload }) => {
    state.posts = payload;
    state.error = "";
  },
  [addPost.rejected]: (state, { payload }) => {
    state.error = payload;
  },
  [editPost.fulfilled]: (state, { payload }) => {
    state.posts = payload;
    state.error = "";
  },
  [editPost.rejected]: (state, { payload }) => {
    state.error = payload;
  },
  [deletePost.fulfilled]: (state, { payload }) => {
    state.posts = payload;
    state.error = "";
  },
  [deletePost.rejected]: (state, { payload }) => {
    state.error = payload;
  },
  [addComment.pending]: state => {
    state.isLoading = true;
  },
  [addComment.fulfilled]: (state, { payload }) => {
    state.isLoading = false;
    state.posts = payload;
  },
  [addComment.rejected]: (state, { payload }) => {
    state.isLoading = false;
    state.error = payload;
  },
  [deleteComment.fulfilled]: (state, { payload }) => {
    state.posts = payload;
  },
  [deleteComment.rejected]: (state, { payload }) => {
    state.error = payload;
  },
  [editComment.fulfilled]: (state, { payload }) => {
    state.posts = payload;
  },
  [editComment.rejected]: (state, { payload }) => {
    state.error = payload;
  },
  [addLike.fulfilled]: (state, { payload }) => {
    state.posts = payload;
  },
  [addLike.rejected]: (state, { payload }) => {
    state.error = payload;
  },
  [deleteLike.fulfilled]: (state, { payload }) => {
    state.posts = payload;
  },
  [addLike.rejected]: (state, { payload }) => {
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
