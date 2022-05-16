import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

const deletePost = createAsyncThunk(
  "post/deletePost",
  async ({ postId, token }, { rejectWithValue }) => {
    try {
      const { status, data } = await axios.delete(`/api/posts/${postId}`, {
        headers: { authorization: token },
      });

      if (status === 201) {
        toast.success("Post deleted");
        return data.posts;
      }
    } catch (err) {
      return rejectWithValue(err.response.data.errors[0]);
    }
  }
);

export { deletePost };
