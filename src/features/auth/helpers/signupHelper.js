import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const signupHelper = createAsyncThunk(
  "auth/signup",
  async ({ firstName, lastName, username, password }, { rejectWithValue }) => {
    try {
      const { status, data } = await axios.post("/api/auth/signup", {
        firstName,
        lastName,
        username,
        password,
      });
      if (status === 201) {
        localStorage.setItem(
          "Spaces_User",
          JSON.stringify({ token: data.encodedToken, userDetails: data.createdUser })
        );
        return data;
      }
    } catch (err) {
      return rejectWithValue(err.response.data.errors[0]);
    }
  }
);
export { signupHelper };
