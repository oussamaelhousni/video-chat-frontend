import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  currentPage: "null",
};

const leftPageSlice = createSlice({
  name: "leftPage",
  initialState,
  reducers: {
    setPage: (state, { payload }) => {
      state.currentPage = payload;
    },
  },
});

export default leftPageSlice.reducer;
export const { setPage } = leftPageSlice.actions;
