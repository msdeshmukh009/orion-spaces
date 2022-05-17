import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

const editComment = createAsyncThunk(
  "/post/editComment",
  async ({ postId, token, commentData }, { rejectWithValue }) => {
    try {
      const { status, data } = await axios.post(
        `/api/comments/edit/${postId}/${commentData._id}`,
        { commentData },
        {
          headers: { authorization: token },
        }
      );
      console.log(data);
      if (status === 201) {
        toast.success("Comment updated");
        return data.posts;
      }
    } catch (err) {
      return rejectWithValue(err.response.data.errors[0]);
    }
  }
);
export { editComment };
