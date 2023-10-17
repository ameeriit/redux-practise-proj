"use client";

import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

export default function UserDataAfterLogin() {
  const user = useSelector((state: RootState) => state.auth.user);
  return (
    <div>
      <p>{user.email}</p>
      <p>
        {user.firstName}
        {user.lastName}
      </p>
      <p>{user.gender}</p>
      <img src={user.image} width={20} height={20} alt="kho"></img>
      <p>{user.token}</p>
    </div>
  );
}
