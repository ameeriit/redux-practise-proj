import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

import axiosInstance from "../api/apiInstance";

export const getAllProductThunks = createAsyncThunk(
  "categories/all",
  async () => {
    try {
      const response = await axiosInstance.get("products");
      if (response.status === 200) {
        return response.data;
      } else {
        throw new Error(`Unexpected response status: ${response.status}`);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          const response = error.response;
          console.error("Server Error:", response.status, response.data);
          throw new Error(`Server Error: ${response.status}`);
        } else if (error.request) {
          if (error.request._wasAborted) {
            console.error("Request Aborted");
            throw new Error("Request Aborted");
          } else {
            console.error("Network Error:", error.message);
            throw new Error("Network Error: Unable to connect to the server");
          }
        }
      } else {
        console.error("Unknown Error:", (error as Error).message);
        throw new Error("Unknown Error: An unexpected error occurred");
      }
    }
  }
);
