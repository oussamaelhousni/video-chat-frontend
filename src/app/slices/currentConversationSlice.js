import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  isError: false,
  errorMessage: "",
  messages: [],
  receiver: null,
};

export const getCurrentConversationMessage = createAsyncThunk(
  "currentConversation/messages",
  async (conversationId, thunkApi) => {
    try {
      const config = {
        headers: {
          authorization: `bearer ${thunkApi.getState().auth.token}`,
        },
      };
      const response = await axios.get(
        import.meta.env.VITE_URL +
          "/api/v1/conversations/" +
          conversationId +
          "/messages",
        config
      );
      return response.data;
    } catch (error) {
      const message = error.response?.data.message || error.message;
      return thunkApi.rejectWithValue(message);
    }
  }
);
const currentConversationSlice = createSlice({
  name: "currentConversation",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getCurrentConversationMessage.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(
        getCurrentConversationMessage.fulfilled,
        (state, { payload }) => {
          console.log("payload", payload);
          state.messages = payload.data.messages;
          state.receiver = payload.data.receiver;
          state.isLoading = false;
        }
      )
      .addCase(
        getCurrentConversationMessage.rejected,
        (state, { payload: error }) => {
          state.isError = true;
          state.errorMessage = error;
        }
      );
  },
});

export default currentConversationSlice.reducer;
