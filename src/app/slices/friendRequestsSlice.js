import { createSlice, createAsyncThunk, isAnyOf } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  requests: [],
  error: "",
  isLoading: false,
  isError: false,
  isSuccess: false,
  // single request
  isLoadingRequest: false,
  errorRequest: "",
};

export const searchAction = createAsyncThunk(
  "friendRequests/search",
  async (search, thunkApi) => {
    try {
      const config = {
        headers: {
          authorization: `bearer ${thunkApi.getState().auth.token}`,
        },
      };
      const response = await axios.get(
        import.meta.env.VITE_URL + "/api/v1/users?search=" + search,
        config
      );
      return response.data;
    } catch (error) {
      const message = error.response?.data.message || error.message;
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const sendFriendRequest = createAsyncThunk(
  "friendRequests/accept",
  async (userId, thunkApi) => {
    try {
      const config = {
        headers: {
          authorization: `bearer ${thunkApi.getState().auth.token}`,
        },
      };
      const response = await axios.post(
        import.meta.env.VITE_URL + "/api/v1/users/sendFriendRequest",
        { userId },
        config
      );
      return response.data;
    } catch (error) {
      const message = error.response?.data.message || error.message;
      console.log(error);
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const acceptFriendRequest = createAsyncThunk(
  "friendRequests/accept",
  async (userId, thunkApi) => {
    try {
      const config = {
        headers: {
          authorization: `bearer ${thunkApi.getState().auth.token}`,
        },
      };
      const response = await axios.post(
        import.meta.env.VITE_URL + "/api/v1/users/acceptFriendRequest",
        { userId },
        config
      );
      return response.data;
    } catch (error) {
      const message = error.response?.data.message || error.message;
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const cancelFriendRequest = createAsyncThunk(
  "friendRequests/cancel",
  async (userId, thunkApi) => {
    try {
      const config = {
        headers: {
          authorization: `bearer ${thunkApi.getState().auth.token}`,
        },
      };
      const response = await axios.post(
        import.meta.env.VITE_URL + "/api/v1/users/cancelFriendRequest",
        { userId },
        config
      );
      return response.data;
    } catch (error) {
      const message = error.response?.data.message || error.message;
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const declineFriendRequest = createAsyncThunk(
  "friendRequests/decline",
  async (userId, thunkApi) => {
    try {
      const config = {
        headers: {
          authorization: `bearer ${thunkApi.getState().auth.token}`,
        },
      };
      const response = await axios.post(
        import.meta.env.VITE_URL +
          "/api/v1/users/declineFriendRequest/" +
          userId,
        {},
        config
      );
      return response.data;
    } catch (error) {
      const message = error.response?.data.message || error.message;
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const block = createAsyncThunk(
  "friendRequests/block",
  async (blockedUserId, thunkApi) => {
    try {
      const config = {
        headers: {
          authorization: `bearer ${thunkApi.getState().auth.token}`,
        },
      };
      const response = await axios.post(
        import.meta.env.VITE_URL + "/api/v1/users/block",
        { blockedUserId },
        config
      );
      return response.data;
    } catch (error) {
      const message = error.response?.data.message || error.message;
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const unblock = createAsyncThunk(
  "friendRequests/unblock",
  async (blockedUserId, thunkApi) => {
    try {
      const config = {
        headers: {
          authorization: `bearer ${thunkApi.getState().auth.token}`,
        },
      };
      const response = await axios.post(
        import.meta.env.VITE_URL + "/api/v1/users/unblock",
        { blockedUserId },
        config
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
        state.isLoading = false;
        state.isError = true;
        state.error = payload;
      })
      .addCase(sendFriendRequest.fulfilled, (state, { payload }) => {
        state.isLoadingRequest = false;
        state.requests = [
          ...state.requests.map((r) => {
            const temp = { ...r };
            if (r._id === payload.userId) {
              temp.isPending = true;
            }
            return temp;
          }),
        ];
      })
      .addCase(cancelFriendRequest.fulfilled, (state, { payload }) => {
        state.isLoadingRequest = false;
        state.requests = [
          ...state.requests.map((r) => {
            const temp = { ...r };
            if (r._id === payload.userId) {
              temp.isPending = false;
            }
            return temp;
          }),
        ];
      })
      .addCase(block.fulfilled, (state, { payload }) => {
        state.isLoadingRequest = false;
        state.requests = [
          ...state.requests.map((r) => {
            const temp = { ...r };
            if (r._id === payload.userId) {
              temp.isBlocked = true;
            }
            return temp;
          }),
        ];
      })
      .addCase(unblock.fulfilled, (state, { payload }) => {
        state.isLoadingRequest = false;
        state.requests = [
          ...state.requests.map((r) => {
            const temp = { ...r };
            if (r._id === payload.userId) {
              temp.isBlocked = false;
            }
            return temp;
          }),
        ];
      })
      .addMatcher(
        isAnyOf(
          cancelFriendRequest.pending,
          acceptFriendRequest.pending,
          sendFriendRequest.pending,
          declineFriendRequest.pending,
          block.pending,
          unblock.pending
        ),
        (state) => {
          state.isLoadingRequest = true;
          state.errorRequest = "";
        }
      )
      .addMatcher(
        isAnyOf(
          cancelFriendRequest.rejected,
          sendFriendRequest.rejected,
          acceptFriendRequest.rejected,
          declineFriendRequest.rejected,
          block.rejected,
          unblock.rejected,
          declineFriendRequest.pending
        ),
        (state, { payload }) => {
          state.isLoadingRequest = false;
          state.errorRequest = payload;
        }
      );
  },
});

export default friendRequestsSlice.reducer;
export const { updateRequest } = friendRequestsSlice.actions;
