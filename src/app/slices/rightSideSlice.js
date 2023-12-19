import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentPage: "null",
};

const rightPageSlice = createSlice({
  name: "rightPage",
  initialState,
  reducers: {
    setPage: (state, { payload }) => {
      state.currentPage = payload;
    },
  },
});

export default rightPageSlice.reducer;
export const { setPage } = rightPageSlice.actions;
