"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";

import Cookies from "js-cookie";

import { logout } from "@/store/slices/authSlices";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  const user = useSelector((state: RootState) => state.auth.user);
  const handleLogout = () => {
    dispatch(logout());
    Cookies.remove("userData");
    Cookies.remove("token");
    router.push("/login");
  };

  const isLoginPage = pathname === "/login";

  return (
    <nav className="flex justify-between bg-slate-800 text-white w-full px-12">
      <div className="container mx-auto flex justify-between py-4">
        <Link href="/">Ameeriit</Link>
        <div className="flex gap-10">
          {isAuthenticated && <Link href={"/products"}>Product</Link>}
          <p className="capitalize">{user.username}</p>
          <div>
            {isAuthenticated && <button onClick={handleLogout}>Logout</button>}
          </div>
          <div>
            {!isAuthenticated && !isLoginPage && <a href="/login">Login</a>}
          </div>
        </div>
      </div>
    </nav>
  );
}
