import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getUsers = createAsyncThunk("user/getUsers", async (_, { rejectWithValue }) => {
  try {
    const { status, data } = await axios.get("/api/users");
    if (status === 200) {
      return data.users;
    }
  } catch (err) {
    return rejectWithValue(err.response.data.errors[0]);
  }
});

export { getUsers };
