import { createSlice } from "@reduxjs/toolkit";
import { addToBookmark, removeFromBookmark, getAllBookmarks } from "./helpers";

const initialState = {
  isLoading: false,
  error: "",
  bookmarks: [],
};

const extraReducers = {
  [getAllBookmarks.pending]: state => {
    state.isLoading = true;
  },
  [getAllBookmarks.fulfilled]: (state, { payload }) => {
    state.isLoading = false;
    state.bookmarks = payload;
  },
  [getAllBookmarks.rejected]: (state, { payload }) => {
    state.isLoading = false;
    state.error = payload;
  },
  [addToBookmark.pending]: state => {
    state.isLoading = true;
  },
  [addToBookmark.fulfilled]: (state, { payload }) => {
    state.isLoading = false;
    state.bookmarks = payload;
  },
  [addToBookmark.rejected]: (state, { payload }) => {
    state.isLoading = false;
    state.error = payload;
  },
  [removeFromBookmark.pending]: state => {
    state.isLoading = true;
  },
  [removeFromBookmark.fulfilled]: (state, { payload }) => {
    state.isLoading = false;
    state.bookmarks = payload;
  },
  [removeFromBookmark.rejected]: (state, { payload }) => {
    state.isLoading = false;
    state.error = payload;
  },
};

const bookmarkSlice = createSlice({
  name: "bookmark",
  initialState,
  reducers: {
    restBookmarks: state => {
      state.bookmarks = [];
    },
  },
  extraReducers,
});

export const { restBookmarks } = bookmarkSlice.actions;

export default bookmarkSlice.reducer;
