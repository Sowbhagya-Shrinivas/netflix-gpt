import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: {
    lang: "en",
  },
  reducers: {
    changeLangugage: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const {changeLangugage} = configSlice.actions;
export default configSlice.reducer;
