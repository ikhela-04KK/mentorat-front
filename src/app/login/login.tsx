"use client";
import { useSession } from "next-auth/react";
import React, { useEffect } from "react";
import { useRouter } from 'next/navigation';
import Login from "@/features/users/login/login";


export default function Home({logger}:{logger?:any}) {


    const Router = useRouter()

    const { data: session, status } = useSession();
    if (status ==="unauthenticated"){

        return (<Login />)
    }
    if (session && session?.user) {
        Router.push("/chat")
    }
}


