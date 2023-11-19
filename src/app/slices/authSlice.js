import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { isAnyOf } from "@reduxjs/toolkit";
const clearState = (state) => {
  state.token = "";
  state.isLoading = false;
  state.isError = false;
  state.isSuccess = false;
  state.successMessage = "";
  state.fullName = "";
  state.email = "";
  state.error = "";
  state.token = "";
  state.profileImage = "";
  state.status = "idle";
};

const initialState = {
  token: localStorage.getItem("token") || "",
  user: JSON.parse(localStorage.getItem("user")),
  isLoading: false,
  isError: false,
  isSuccess: false,
  successMessage: "",
  error: "",
  status: "idle",
};

export const login = createAsyncThunk(
  "auth/login",
  async (loginData, thunkAPI) => {
    try {
      let response = await axios.post(
        import.meta.env.VITE_URL + "/api/v1/auth/login",
        loginData
      );
      return response.data;
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async (registerData, thunkApi) => {
    try {
      const response = await axios.post(
        import.meta.env.VITE_URL + "/api/v1/auth/register",
        registerData
      );
      return response.data;
    } catch (error) {
      const message = error.response?.data.message || error.message;
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const resendConfirmationMail = createAsyncThunk(
  "auth/resendConfirmationMail",
  async (email, thunkApi) => {
    try {
      const response = await axios.post(
        import.meta.env.VITE_URL + "/api/v1/auth/resend-confirmation-email",
        { email }
      );
      return response.data;
    } catch (error) {
      const message = error.response?.data.message || error.message;
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const confirmAccount = createAsyncThunk(
  "auth/confirmAccount",
  async ({ id, emailConfirmationCode }, thunkAPI) => {
    try {
      const response = await axios.post(
        `${
          import.meta.env.VITE_URL
        }/api/v1/auth/confirm/${id}/${emailConfirmationCode}`
      );
      return response.data;
    } catch (error) {
      const message = error.response?.data.message || error.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    initState: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, { payload }) => {
        clearState(state);
        state.status = "success";
        state.isSuccess = true;
        state.successMessage = payload.message;
        state.token = payload.data.token;
        state.user = payload.data.user;
        localStorage.setItem("token", state.token.access);
        localStorage.setItem("user", JSON.stringify(state.user));
      })
      .addMatcher(
        isAnyOf(
          login.pending,
          register.pending,
          resendConfirmationMail.pending,
          confirmAccount.pending
        ),
        (state) => {
          clearState(state);
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          register.fulfilled,
          resendConfirmationMail.fulfilled,
          confirmAccount.fulfilled
        ),
        (state, { payload }) => {
          clearState(state);
          state.status = "success";
          state.isSuccess = true;
          state.successMessage = payload.message;
        }
      )
      .addMatcher(
        isAnyOf(
          login.rejected,
          register.rejected,
          resendConfirmationMail.rejected,
          confirmAccount.rejected
        ),
        (state, { payload: error }) => {
          clearState(state);
          state.status = "error";
          state.isError = true;
          state.error = error;
        }
      );
  },
});

export default authSlice.reducer;
export const { initState } = authSlice.actions;
