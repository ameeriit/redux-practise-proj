"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

import { AppDispatch, RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";

import { setError } from "@/store/slices/authSlices";
import { loginUser } from "@/store/thunks/authThunks";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch: AppDispatch = useDispatch();
  const router = useRouter();

  const error = useSelector((state: RootState) => state.auth.error);

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    dispatch(setError(null));

    if (!username || !password) {
      dispatch(setError("Username and password are required."));
      return;
    }

    try {
      const response = await dispatch(loginUser({ username, password }));
      if (loginUser.fulfilled.match(response)) {
        router.push("/");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <>
      <form
        onSubmit={handleLogin}
        className="flex flex-col gap-3 w-[350px] mb-10"
      >
        <label htmlFor="username">Username</label>
        <input
          id="username"
          className="text-black px-4 py-2 rounded"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          className="text-black px-4 py-2 rounded"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      {error && <p className="text-red-500">{error}</p>}
    </>
  );
};

export default LoginForm;
