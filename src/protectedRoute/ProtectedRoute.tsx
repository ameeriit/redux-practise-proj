"use client";

import { useRouter } from "next/navigation";
import { ReactNode } from "react";

import { useSelector } from "react-redux";

import { RootState } from "@/store/store";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const router = useRouter();

  if (!isAuthenticated) {
    router.push("/login");
    return null;
  }

  return children;
};

export default ProtectedRoute;
