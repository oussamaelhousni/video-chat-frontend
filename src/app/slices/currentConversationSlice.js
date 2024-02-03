import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  messageIsLoading: false,
  messageError: "",
  isError: false,
  errorMessage: "",
  conversationId: null,
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

export const sendMessage = createAsyncThunk(
  "currentConversation/sendMessage",
  async (body, thunkApi) => {
    try {
      const config = {
        headers: {
          authorization: `bearer ${thunkApi.getState().auth.token}`,
        },
      };
      const response = await axios.post(
        import.meta.env.VITE_URL +
          "/api/v1/conversations/" +
          body.conversationId +
          "/messages",
        body,
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
  reducers: {
    setCurrentConversation: (state, { payload }) => {
      state.conversationId = payload;
    },
    pushNewMessage: (state, { payload }) => {
      state.messages = [...state.messages, payload];
    },
  },
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
      )
      .addCase(sendMessage.pending, (state) => {
        state.messageIsLoading = true;
        state.messageError = "";
      })
      .addCase(sendMessage.fulfilled, (state, { payload }) => {
        state.messageIsLoading = false;
        state.messages = [...state.messages, payload.data.message];
      })
      .addCase(sendMessage.rejected, (state, { payload }) => {
        state.messageError = payload;
        state.messageIsLoading = false;
      });
  },
});

export default currentConversationSlice.reducer;
export const { setCurrentConversation, pushNewMessage } =
  currentConversationSlice.actions;
