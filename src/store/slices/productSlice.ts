import { createSlice } from "@reduxjs/toolkit";
import { ProductState } from "../storeTypes";
import { fetchProductThunks } from "../thunks/fetchProductThunks";

const initialState: ProductState = {
  products: [],
  status: "idle",
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductThunks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductThunks.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload.products;
      })
      .addCase(fetchProductThunks.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? null;
      });
  },
});

export default productSlice.reducer;
