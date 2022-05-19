import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

const deleteLike = createAsyncThunk(
  "post/dislike",
  async ({ postId, token }, { rejectWithValue }) => {
    try {
      const { status, data } = await axios.post(
        `/api/posts/dislike/${postId}`,
        {},
        { headers: { authorization: token } }
      );
      if (status === 201) {
        toast.success("Like removed");
        return data.posts;
      }
    } catch (err) {
      return rejectWithValue(err.response.data.errors[0]);
    }
  }
);

export { deleteLike };
