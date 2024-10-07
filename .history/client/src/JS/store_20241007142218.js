import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import carSlice from "./carSlice";

export const store = configureStore({
  reducer: { user: userSlice,car:carSlice,},
});
