import { configureStore } from "@reduxjs/toolkit";

import allProductSlice from "./slices/allProductSlice";
import allTodoSlice from "./slices/allTodoSlice";
import authSlices from "./slices/authSlices";

export const store = configureStore({
  reducer: {
    auth: authSlices,
    product: allProductSlice,
    todo: allTodoSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
