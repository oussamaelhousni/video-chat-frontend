import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  socket: null,
};

const socketSlice = createSlice({
  name: "socket",
  initialState,
  reducers: {
    setSocket: (state, { payload }) => {
      state.socket = payload;
    },
  },
});

export default socketSlice.reducer;
export const { setSocket } = socketSlice.actions;
