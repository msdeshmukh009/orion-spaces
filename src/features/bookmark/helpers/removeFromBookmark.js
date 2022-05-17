import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

const removeFromBookmark = createAsyncThunk(
  "/user/removeFromBookmark",
  async ({ token, postId }, { rejectWithValue }) => {
    try {
      const { status, data } = await axios.post(
        `/api/users/remove-bookmark/${postId}`,
        {},
        {
          headers: { authorization: token },
        }
      );
      if (status === 200) {
        toast.success("Removed from bookmarks");
        return data.bookmarks;
      }
    } catch (error) {
      return rejectWithValue(error.response.data.errors[0].split(".")[0]);
    }
  }
);
export { removeFromBookmark };
