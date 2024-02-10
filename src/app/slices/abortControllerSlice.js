import { createSlice } from "@reduxjs/toolkit";
const map = new Map();
const abortSlice = createSlice({
  name: "abortSlice",
  initialState: { aborters: map },
  reducers: {
    addAbort: (state, { payload }) => {
      console.log("abortSlice", payload);
      state.aborters.set(payload.id, payload.aborter);
    },
    removeAbort: (state, { payload }) => {
      state.aborters.remove(payload.id);
    },
  },
});

export default abortSlice.reducer;
export const { addAbort, removeAbort } = abortSlice.actions;
