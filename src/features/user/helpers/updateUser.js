import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const updateUser = createAsyncThunk(
  "user/update",
  async ({ token, userData }, { rejectWithValue }) => {
    try {
      const { status, data } = await axios.post(
        "/api/users/edit",
        { userData },
        { headers: { authorization: token } }
      );
      console.log(data);
      if (status === 201) {
        return data.user;
      }
    } catch (err) {
      return rejectWithValue(err.response.data.errors[0]);
    }
  }
);

export { updateUser };
