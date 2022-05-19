import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axios from "axios";

const addToBookmark = createAsyncThunk(
  "/user/addToBoomark",
  async ({ token, postId }, { rejectWithValue }) => {
    try {
      const { status, data } = await axios.post(
        `/api/users/bookmark/${postId}`,
        {},
        {
          headers: { authorization: token },
        }
      );

      if (status === 200) {
        toast.success("Added to Bookmarks.");
        return data.bookmarks;
      }
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.response.data.errors[0]);
    }
  }
);
export { addToBookmark };
