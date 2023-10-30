import axios from "axios";

export const handleError = (error: any) => {
  if (axios.isAxiosError(error)) {
    if (!error.response) {
      throw new Error("Network error or DNS unreachable.");
    }
    const { status } = error.response;
    throw new Error(`HTTP Error: ${status} (Please check your credentials)`);
  } else {
    console.error("Unknown Error:", error.message);
    throw new Error("Unknown Error: An unexpected error occurred");
  }
};
