
"use client";
import { useSession } from "next-auth/react";
import React from "react";
import { useRouter } from 'next/navigation';
import Login from "@/features/users/login/login";


// Session exist ----> dashboard on utilise le useSession pour voir si l'utiisateur est authentifié  
export default function Home() {
    const { data: session } = useSession();
    console.log({ session });
    const Router = useRouter()
    console.log(1);
    if (session && session.user) {
        Router.push("/chat")
    }
    return (
        <>
            <Login />
        </>
    );
}
