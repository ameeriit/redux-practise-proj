import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import Cookies from "js-cookie";

import { handleError } from "@/utils/error";
import axiosInstance from "../api/apiInstance";
import { AuthState } from "../storeTypes";

const userDataFromCookies = Cookies.get("userData")
  ? JSON.parse(Cookies.get("userData") || "{}")
  : null;

const tokenFromCookies = Cookies.get("token");

const initialState: AuthState = {
  user: userDataFromCookies || {
    username: "",
    email: "",
    firstName: "",
    lastName: "",
    gender: "",
    image: "",
    token: "",
  },
  isAuthenticated: !!tokenFromCookies,
  isLoading: false,
  error: null,
};

export interface LoginPayload {
  username: string;
  password: string;
}

export const loginUser = createAsyncThunk(
  "auth/login",
  async ({ username, password }: LoginPayload, { dispatch }) => {
    try {
      const response = await axiosInstance.post("auth/login", {
        username,
        password,
      });

      const data = response.data;
      const token = data.token;

      Cookies.set("userData", JSON.stringify(data));
      Cookies.set("token", token);

      return data;
    } catch (error) {
      handleError(error);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthenticated: (
      state,
      action: PayloadAction<{ user: any; token: string }>
    ) => {
      state.user = action.payload.user;
      state.user.token = action.payload.token;
      state.isAuthenticated = true;
      state.error = null;
    },
    logout: (state) => {
      state.user = initialState.user;
      state.isAuthenticated = false;
      state.error = null;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = (action.payload as string | null) || "An error occurred.";
      });
  },
});

export const { setAuthenticated, logout, setError } = authSlice.actions;
export default authSlice.reducer;
