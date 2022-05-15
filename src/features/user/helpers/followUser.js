import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

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
        return data;
      }
    } catch (err) {
      return rejectWithValue(err.response.data.errors[0]);
    }
  }
);

export { followUser };
