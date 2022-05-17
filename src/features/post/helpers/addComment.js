import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const addComment = createAsyncThunk(
  "/post/addComment",
  async ({ postId, token, commentData }, { rejectWithValue }) => {
    console.log(postId, token, commentData);
    try {
      const { status, data } = await axios.post(
        `/api/comments/add/${postId}`,
        { commentData },
        {
          headers: { authorization: token },
        }
      );
      if (status === 201) {
        toast.success("Comment added");
        return data.posts;
      }
    } catch (err) {
      return rejectWithValue(err.response.data.errors[0]);
    }
  }
);

export { addComment };
