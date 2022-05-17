import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

const unFollowUser = createAsyncThunk(
  "user/unfollow",
  async ({ followUserId, token }, { rejectWithValue }) => {
    try {
      const { status, data } = await axios.post(
        `/api/users/unfollow/${followUserId}`,
        {},
        {
          headers: {
            authorization: token,
          },
        }
      );
      if (status === 200) {
        toast.success(`You just unfollowed ${data.followUser.firstName}`);
        return data;
      }
    } catch (err) {
      return rejectWithValue(err.response.data.errors[0]);
    }
  }
);

export { unFollowUser };
