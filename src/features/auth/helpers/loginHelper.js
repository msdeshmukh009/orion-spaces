import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const loginHelper = createAsyncThunk(
  "auth/login",
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const { status, data } = await axios.post("/api/auth/login", { username, password });
      if (status === 200) {
        localStorage.setItem(
          "Spaces_User",
          JSON.stringify({ token: data.encodedToken, userData: data.foundUser })
        );
      }
      return data;
    } catch (err) {
      return rejectWithValue(err.response.data.errors[0]);
    }
  }
);

export { loginHelper };
