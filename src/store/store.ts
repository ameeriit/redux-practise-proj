import { configureStore } from "@reduxjs/toolkit";
import authSlices from "./slices/authSlices";
import productSlice from "./slices/productSlice";

export const store = configureStore({
  reducer: {
    auth: authSlices,
    product: productSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
