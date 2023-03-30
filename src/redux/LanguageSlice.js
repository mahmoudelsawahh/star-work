import { createSlice } from "@reduxjs/toolkit";

export const LanguageSlice = createSlice({
  name: "counter",
  initialState: {
    language: "italy",
  },
  reducers: {
    getLanguageStore: (state, action) => {
      state.language = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getLanguageStore } = LanguageSlice.actions;

export default LanguageSlice.reducer;
