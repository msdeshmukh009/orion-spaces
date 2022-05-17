import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

const addLike = createAsyncThunk("post/addLike", async ({ postId, token }, { rejectWithValue }) => {
  try {
    const { status, data } = await axios.post(
      `/api/posts/like/${postId}`,
      {},
      { headers: { authorization: token } }
    );

    if (status === 201) {
      toast.success("Like added");
      return data.posts;
    }
  } catch (err) {
    return rejectWithValue(err.response.data.errors[0]);
  }
});

export { addLike };
