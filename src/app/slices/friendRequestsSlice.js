import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  requests: [],
  error: "",
  isLoading: false,
  isError: false,
  isSuccess: false,
};

export const searchAction = createAsyncThunk(
  "friendRequests/search",
  async (search, thunkApi) => {
    try {
      console.log("hello");
      const response = await axios.get(
        import.meta.env.VITE_URL + "/api/v1/users?search=" + search
      );
      return response.data;
    } catch (error) {
      const message = error.response?.data.message || error.message;
      return thunkApi.rejectWithValue(message);
    }
  }
);
export const acceptFriendRequest = createAsyncThunk(
  "friendRequests/accept",
  async (user, thunkApi) => {
    try {
      const response = await axios.get(
        import.meta.env.VITE_URL + "/api/v1/users?search="
      );
      return response.data;
    } catch (error) {
      const message = error.response?.data.message || error.message;
      return thunkApi.rejectWithValue(message);
    }
  }
);

const friendRequestsSlice = createSlice({
  name: "friendRequests",
  initialState,
  reducers: {
    updateRequest: (state, { payload }) => {
      Object.keys(payload).forEach((key) => (state[key] = payload[key]));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchAction.pending, (state) => {
        state.isLoading = true;
        state.requests = [];
        state.isError = false;
      })
      .addCase(searchAction.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.requests = payload.data.users;
        state.isError = false;
      })
      .addCase(searchAction.rejected, (state, { payload }) => {
        state.isError = true;
        state.error = payload;
      });
  },
});

export default friendRequestsSlice.reducer;
export const { updateRequest } = friendRequestsSlice.actions;
