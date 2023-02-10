import { createSlice } from "@reduxjs/toolkit";

export const colorSlice = createSlice({
  name: "colorCode",
  initialState: {
    allColor: [
      { no: 1, status: "noVisits" },
      { no: 2, status: "noVisits" },
      { no: 3, status: "noVisits" },
      { no: 4, status: "noVisits" },
      { no: 5, status: "noVisits" },
      { no: 6, status: "noVisits" },
      { no: 7, status: "noVisits" },
      { no: 8, status: "noVisits" },  
      { no: 9, status: "noVisits" },
      { no: 10, status: "noVisits" },
    ],
  },
  reducers: {
    setAllColors: (state, action) => {
      state.allColor = action.payload;
    },
  },
});

export const { setAllColors } = colorSlice.actions;

export default colorSlice.reducer;

export const getColors = (state) => state.colorCode.allColor;
