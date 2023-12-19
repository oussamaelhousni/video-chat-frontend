import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import leftPageReducer from "./slices/leftSideSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    leftPage: leftPageReducer,
  },
});
