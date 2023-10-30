import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { handleError } from "@/utils/error";
import axiosInstance from "../api/apiInstance";
import { TodoState } from "../storeTypes";

const initialState: TodoState = {
  todos: [],
  isLoading: false,
  error: null,
};

export const getAllTodoThunks = createAsyncThunk("todos/all", async () => {
  try {
    const response = await axiosInstance.get("todos");

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(`Unexpected response status: ${response.status}`);
    }
  } catch (error) {
    handleError(error);
  }
});

const allTodoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllTodoThunks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllTodoThunks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.todos = action.payload.todos;
      })
      .addCase(getAllTodoThunks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message ?? null;
      });
  },
});

export default allTodoSlice.reducer;
