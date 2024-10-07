import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import carSlice from "./carSlice";
import { clientSlice } from "./clientSlice";

export const store = configureStore({
  reducer: { user: userSlice,car:carSlice,client:clientSlice },
});
