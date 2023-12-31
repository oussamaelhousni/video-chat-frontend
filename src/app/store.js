import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./slices/authSlice";
import leftPageReducer from "./slices/leftSideSlice";
import rightPageReducer from "./slices/rightSideSlice";
import socketReducer from "./slices/socketSlice";
import popupReducer from "./slices/popupSlice";
import friendRequestsReducer from "./slices/friendRequestsSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    leftPage: leftPageReducer,
    rightPage: rightPageReducer,
    socket: socketReducer,
    popup: popupReducer,
    friendRequests: friendRequestsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
