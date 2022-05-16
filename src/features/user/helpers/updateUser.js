import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

const updateUser = createAsyncThunk(
  "user/update",
  async ({ token, userData }, { rejectWithValue }) => {
    try {
      const { status, data } = await axios.post(
        "/api/users/edit",
        { userData },
        { headers: { authorization: token } }
      );

      if (status === 201) {
        toast.success("Profile updated");
        return data.user;
      }
    } catch (err) {
      return rejectWithValue(err.response.data.errors[0]);
    }
  }
);

export { updateUser };
