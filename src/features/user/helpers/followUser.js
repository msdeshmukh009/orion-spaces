import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

const followUser = createAsyncThunk(
  "user/follow",
  async ({ followUserId, token }, { rejectWithValue }) => {
    try {
      const { status, data } = await axios.post(
        `/api/users/follow/${followUserId}`,
        {},
        { headers: { authorization: token } }
      );

      if (status === 200) {
        toast.success(`You are now following ${data.followUser.firstName}`);
        return data;
      }
    } catch (err) {
      return rejectWithValue(err.response.data.errors[0]);
    }
  }
);

export { followUser };
