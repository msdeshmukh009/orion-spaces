import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getAllBookmarks = createAsyncThunk(
  "/user/getBookmarks",
  async ({ token }, { rejectWithValue }) => {
    try {
      const { status, data } = await axios.get(`/api/users/bookmark`, {
        headers: { authorization: token },
      });
      if (status === 200) {
        return data.bookmarks;
      }
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.response.data.errors[0]);
    }
  }
);

export { getAllBookmarks };
