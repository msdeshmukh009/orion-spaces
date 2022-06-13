import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

const editPost = createAsyncThunk(
  "post/editPost",
  async ({ postData, token, post, toastId }, { rejectWithValue }) => {
    try {
      const { status, data } = await axios.post(
        `/api/posts/edit/${post._id}`,
        { postData },
        {
          headers: { authorization: token },
        }
      );

      if (status === 201) {
        toast.success("Post updated", { id: toastId });
        return data.posts;
      }
    } catch (err) {
      toast.error("Could not update the post. Try again");
      return rejectWithValue(err.response.data.errors[0]);
    }
  }
);

export { editPost };
