import { createSlice } from "@reduxjs/toolkit";

export const navSlice = createSlice({
  name: "nav",
  initialState: {
    activeNav: "all_section",
  },
  reducers: {
    setActiveTab: (state, action) => {
      state.activeNav = action.payload;
      console.log(state.activeNav);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setActiveTab } = navSlice.actions;

export default navSlice.reducer;
