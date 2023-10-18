import { createSlice } from "@reduxjs/toolkit";

import { ProductState } from "../storeTypes";
import { getAllProductThunks } from "../thunks/getAllProductThunks";

const initialState: ProductState = {
  products: [],
  status: "idle",
  error: null,
};

const allProductSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProductThunks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllProductThunks.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload.products;
      })
      .addCase(getAllProductThunks.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? null;
      });
  },
});

export default allProductSlice.reducer;
