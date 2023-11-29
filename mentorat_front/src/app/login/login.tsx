
"use client";
import { useSession } from "next-auth/react";
import React, { useEffect } from "react";
import { useRouter } from 'next/navigation';
import Login from "@/features/users/login/login";
// import socket from "../api/socket/socket";
// import { Socket } from "socket.io-client";


// Session exist ----> dashboard on utilise le useSession pour voir si l'utiisateur est authentifié  
export default function Home() {
    console.log(2)

    const { data: session } = useSession();

    console.log(2)
    console.log({ session });
    console.log(3)

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

// useEffect(() => {
//     // Se connecter au serveur Socket.io

//     // Écouter les événements du serveur
//     socket.connect()
//     socket.on('users', (data) => {
//         console.log('Message from server:', data);
//     });

//     // Nettoyer la connexion lors du démontage du composant
//     return () => {
//         socket.disconnect();
//     };
// }, []);
