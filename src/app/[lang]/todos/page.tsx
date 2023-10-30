"use client";

import { useEffect } from "react";

import { AppDispatch, RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";

import ProtectedRoute from "@/protectedRoute/ProtectedRoute";
import { getAllTodoThunks } from "@/store/slices/allTodoSlice";

const page = () => {
  const dispatch: AppDispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todo.todos);
  const error = useSelector((state: RootState) => state.todo.error);
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  //   useEffect(() => {
  //     {
  //       isAuthenticated && dispatch(getAllTodoThunks());
  //     }
  //   }, [dispatch]);

  useEffect(() => {
    if (isAuthenticated) {
      const promise = dispatch(getAllTodoThunks());
      return () => {
        promise.abort();
      };
    }
  }, [isAuthenticated, dispatch]);

  return (
    <ProtectedRoute>
      <div className="container mx-auto p-12">
        <h1 className="text-4xl mb-4">Todo List</h1>
        <ul>
          {todos.map((todo: any) => (
            <li
              key={todo.id}
              className="cursor-pointer flex gap-2 border-white rounded-lg border-[1px] mb-4 px-4 pt-3 pb-4"
            >
              <h2 className="mb-2">{todo.id}.</h2>
              <h2 className="mb-2">{todo.todo}</h2>
            </li>
          ))}
        </ul>
      </div>
    </ProtectedRoute>
  );
};

export default page;
