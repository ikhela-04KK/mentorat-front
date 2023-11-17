"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import Login from "./login/login";

const SignInButton = () => {
  const { data: session } = useSession();
  console.log({ session });

  // Session exist ----> dashboard on utilise le useSession pour voir si l'utiisateur est authentifié
  console.log(1);
  if (session && session.user)
    return (
      <div className="flex gap-4 ml-auto">
        <p className="text-sky-600">{session.user.name}</p>
        <Link
          href={"/api/auth/signout"}
          className="flex gap-4 ml-auto text-red-600"
        >
          Sign Out
        </Link>
      </div>
    );
  return (
    <Login />
  );
};
export default SignInButton;
