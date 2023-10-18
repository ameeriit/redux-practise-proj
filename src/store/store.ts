import { configureStore } from "@reduxjs/toolkit";

import allProductSlice from "./slices/allProductSlice";
import authSlices from "./slices/authSlices";

export const store = configureStore({
  reducer: {
    auth: authSlices,
    product: allProductSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
