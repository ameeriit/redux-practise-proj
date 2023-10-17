"use client";

import { AppDispatch } from "@/store/store";
import { loginUser } from "@/store/thunks/authThunks";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch: AppDispatch = useDispatch();
  const router = useRouter();

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    dispatch(loginUser({ username, password }));
    router.push("/");
    console.log("handle", handleLogin);
  };

  return (
    <form
      onSubmit={handleLogin}
      className="flex flex-col gap-3 w-[250px] mb-10"
    >
      <label htmlFor="username">username</label>
      <input
        id="username"
        className="text-black"
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label htmlFor="password">username</label>
      <input
        id="password"
        className="text-black"
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
