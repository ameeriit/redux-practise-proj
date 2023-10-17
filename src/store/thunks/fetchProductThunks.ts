import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../api/apiInstance";

export const fetchProductThunks = createAsyncThunk(
  "categories/all",
  async () => {
    try {
      const response = await axiosInstance.get("products");
      if (response.status === 200) {
        return response.data;
      } else {
        throw new Error(`Unexpected response status: ${response.status}`);
      }
    } catch (error: any) {
      if (error.response) {
        const response = error.response;
        console.error("Server Error:", response.status, response.data);
        throw new Error(`Server Error: ${response.status}`);
      } else if (error.request) {
        console.error("Network Error:", error.message);
        throw new Error("Network Error: Unable to connect to the server");
      } else {
        console.error("Unknown Error:", error.message);
        throw new Error("Unknown Error: An unexpected error occurred");
      }
    }
  }
);
