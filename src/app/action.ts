import axiosInstance from "@/store/api/apiInstance";
import Cookies from "js-cookie";

export interface LoginPayload {
  username: string;
  password: string;
}

export const loginAsync = async ({ username, password }: LoginPayload) => {
  try {
    const response = await axiosInstance.post("auth/login", {
      username,
      password,
    });

    if (response.status === 200) {
      const data = response.data;
      const token = data.token;

      Cookies.set("userData", JSON.stringify(data), {});
      Cookies.set("token", token, {});

      return data;
    } else {
      throw new Error(`Unexpected response status: ${response.status}`);
    }
  } catch (error: any) {
    if (error.response) {
      console.error(
        "Server Error:",
        error.response.status,
        error.response.data
      );
      throw new Error(`Server Error: ${error.response.status}`);
    } else if (error.request) {
      console.error("Network Error:", error.message);
      throw new Error("Network Error: Unable to connect to the server");
    } else {
      console.error("Unknown Error:", error.message);
      throw new Error("Unknown Error: An unexpected error occurred");
    }
  }
};
