"use client";

import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { AuthState } from "../storeTypes";
import { loginUser } from "../thunks/authThunks";

const tokenFromCookies = Cookies.get("token");
const userDataFromCookies = Cookies.get("userData")
  ? JSON.parse(Cookies.get("userData") || "{}")
  : null;

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
  token: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthenticated: (state, action) => {
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user.username = "";
      state.user.email = "";
      state.isAuthenticated = false;
      state.token = "";
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
        state.error = action.error.message ?? null;
      });
  },
});

export const { setAuthenticated, logout } = authSlice.actions;
export default authSlice.reducer;
