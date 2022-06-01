import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

const addPost = createAsyncThunk(
  "post/add",
  async ({ postData, token, toastId }, { rejectWithValue }) => {
    try {
      const { status, data } = await axios.post(
        "/api/posts",
        { postData },
        { headers: { authorization: token } }
      );

      if (status === 201) {
        toast.success("Post added", { id: toastId });
        return data.posts;
      }
    } catch (err) {
      toast.error("Something went wrong, please try again.");
      return rejectWithValue(err.response.data.errors[0]);
    }
  }
);

export { addPost };
