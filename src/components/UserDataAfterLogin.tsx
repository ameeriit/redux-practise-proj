"use client";

import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

export default function UserDataAfterLogin() {
  const user = useSelector((state: RootState) => state.auth.user);
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  return (
    <>
      {isAuthenticated && (
        <div>
          <p>Email: {user.email}</p>
          <div className="inline-flex gap-2 ">
            <p>Name:</p>
            <p>{user.firstName}</p>
            <p>{user.lastName}</p>
          </div>
          <p> Gender: {user.gender}</p>
        </div>
      )}
    </>
  );
}
