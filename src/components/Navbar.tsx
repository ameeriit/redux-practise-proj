"use client";

import { logout } from "@/store/slices/authSlices";
import { RootState } from "@/store/store";
import Cookies from "js-cookie";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

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
    <nav className="flex justify-between bg-slate-800 text-white w-full">
      <div className="container mx-auto flex justify-between py-4">
        <Link href="/">Ameeriit</Link>
        <div className="flex gap-10">
          {/* <p>{user.username}</p> */}
          <Link href={"/products"}>product</Link>
          <div>
            {isAuthenticated && <button onClick={handleLogout}>Logout</button>}
          </div>
          <div>
            {!isAuthenticated && !isLoginPage && <a href="/login">login</a>}
          </div>
        </div>
      </div>
    </nav>
  );
}
