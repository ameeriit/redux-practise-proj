import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { handleError } from "@/utils/error";
import axiosInstance from "../api/apiInstance";
import { ProductState } from "../storeTypes";

const initialState: ProductState = {
  products: [],
  status: "idle",
  error: null,
};

export const getAllProductThunks = createAsyncThunk(
  "products/all",
  async () => {
    try {
      const response = await axiosInstance.get("products");
      if (response.status === 200) {
        return response.data;
      } else {
        throw new Error(`Unexpected response status: ${response.status}`);
      }
    } catch (error) {
      handleError(error);
    }
  }
);

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
