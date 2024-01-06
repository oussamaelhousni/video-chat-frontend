import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  story: false,
  search: false,
};

const popupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    openPopup: (state, { payload }) => {
      state[payload] = true;
    },

    closePopup: (state, { payload }) => {
      state[payload] = false;
    },
  },
});

export default popupSlice.reducer;
export const { openPopup, closePopup } = popupSlice.actions;
