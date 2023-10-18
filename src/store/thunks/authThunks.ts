import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

import Cookies from "js-cookie";

import axiosInstance from "../api/apiInstance";
import { setAuthenticated } from "../slices/authSlices";

export interface LoginPayload {
  username: string;
  password: string;
}

export const loginUser = createAsyncThunk(
  "auth/login",
  async (
    { username, password }: LoginPayload,
    { dispatch, rejectWithValue }
  ) => {
    try {
      const response = await axiosInstance.post("auth/login", {
        username,
        password,
      });

      const data = response.data;
      const token = data.token;

      Cookies.set("userData", JSON.stringify(data));
      Cookies.set("token", token);

      dispatch(setAuthenticated({ user: data, token }));

      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (!error.response) {
          return rejectWithValue("Network error or DNS unreachable.");
        }
        const { status, data } = error.response;
        return rejectWithValue(`HTTP Error: ${status} - ${data.message}`);
      }
      throw error;
    }
  }
);
