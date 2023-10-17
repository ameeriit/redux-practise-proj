import { LoginPayload, loginAsync } from "@/app/action";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const loginUser = createAsyncThunk(
  "auth/login",
  async (payload: LoginPayload) => {
    const data = await loginAsync(payload);
    return data;
  }
);

// import { createAsyncThunk } from "@reduxjs/toolkit";
// import Cookies from "js-cookie";
// import axiosInstance from "../api/apiInstance";
// import { setAuthenticated } from "../slices/authSlices";

// export interface LoginPayload {
//   username: string;
//   password: string;
// }

// export const loginUser = createAsyncThunk(
//   "auth/login",
//   async ({ username, password }: LoginPayload, { dispatch }) => {
//     try {
//       const response = await axiosInstance.post("auth/login", {
//         username,
//         password,
//       });

//       const data = response.data;
//       const token = data.token;

//       Cookies.set("userData", JSON.stringify(data), {
//         // httpOnly: true,
//       });
//       Cookies.set("token", token, {
//         // httpOnly: true,
//       });

//       dispatch(setAuthenticated({ user: data, token }));

//       return data;
//     } catch (error) {
//       throw error;
//     }
//   }
// );
