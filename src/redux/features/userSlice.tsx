import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { InitialState } from "../../types/Types";

const initialState: InitialState = {
  loading: false,
  users: [],
  error: "",
};

export const fetchUsers = createAsyncThunk(
  "user/fetchUsers",
  async (page: number) => {
    try {
      const response = await axios.get(
        `https://servers-omega.vercel.app/users/p?limit=8&page=${page - 1}`
      );
      return [...response.data.users];
    } catch (error) {
      throw error;
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.users = payload;
        state.error = "";
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.users = [];
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export default userSlice.reducer;
