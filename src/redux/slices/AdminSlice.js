// adminSlice.js
import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "admin",
  initialState: false,
  reducers: {
    adminCheck: (state, action) => {
      return action.payload;
    },

  },
});

export const { adminCheck } = adminSlice.actions;
export default adminSlice.reducer;
