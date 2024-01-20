import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  requests: [],
  count: 0,
  isError: false,
  isLoading: false,
  error: "",
};

export const getFriendRequests = createAsyncThunk(
  "addFriendsSlice/friendRequests",
  async (_ = null, thunkApi) => {
    const config = {
      headers: {
        authorization: `Bearer ${thunkApi.getState().auth.token}`,
      },
    };
    try {
      const response = await axios.get(
        import.meta.env.VITE_URL + "/api/v1/users/friendRequests",
        config
      );
      return response.data.data;
    } catch (error) {
      const message = error.response?.data.message || error.message;
      return thunkApi.rejectWithValue(message);
    }
  }
);

const addFriendsSlice = createSlice({
  name: "addFriendsSlice",
  initialState,
  reducers: {
    addNewFriend: (state, { payload }) => {
      state.count = state.count + 1;
      state.requests = [
        payload,
        ...state.requests.slice(0, state.requests.length),
      ];
    },
    removeFriend: (state, { payload }) => {
      state.count = Math.max(0, state.count - 1);
      state.requests = state.requests.filter((r) => r._id !== payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFriendRequests.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getFriendRequests.fulfilled, (state, { payload }) => {
        console.log("payload", payload);
        state.isLoading = false;
        state.requests = payload.users;
        state.count = payload.count;
      })
      .addCase(getFriendRequests.rejected, (state, { payload }) => {
        state.isError = true;
        state.isLoading = false;
        state.error = payload;
      });
  },
});
export const { addNewFriend, removeFriend } = addFriendsSlice.actions;
export default addFriendsSlice.reducer;
