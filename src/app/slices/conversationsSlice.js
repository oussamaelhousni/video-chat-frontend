import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getConversations = createAsyncThunk(
  "conversations/get",
  async (_, thunkApi) => {
    try {
      const config = {
        headers: {
          authorization: `bearer ${thunkApi.getState().auth.token}`,
        },
      };
      const response = await axios.get(
        import.meta.env.VITE_URL + "/api/v1/conversations",
        config
      );
      return response.data;
    } catch (error) {
      const message = error.response?.data.message || error.message;
      return thunkApi.rejectWithValue(message);
    }
  }
);

const initialState = {
  conversations: [],
  currentConversation: null,
  isLoading: false,
  isError: false,
  error: "",
};

const conversationsSlice = createSlice({
  name: "conversationsSlice",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getConversations.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(getConversations.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.conversations = payload.data.conversations;
      })
      .addCase(getConversations.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.error = payload;
      });
  },
});

export default conversationsSlice.reducer;
