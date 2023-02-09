import { configureStore } from "@reduxjs/toolkit";
import colorSlice from "./slices/colorSlice";
import navSlice from "./slices/navSlice";

export default configureStore({
  reducer: { nav: navSlice },
  reducer: {colorCode: colorSlice}
});
