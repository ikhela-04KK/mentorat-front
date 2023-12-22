"use client";

// socketContext.tsx
import React, { createContext, useContext, useState, useEffect } from "react";
import { getSession } from "next-auth/react";
import { Socket, io } from "socket.io-client";
import { ChatMessagerie, ChatResult } from "@/lib/chat-type";

interface Props {
    children: React.ReactNode;
}
interface propsSocketContext {
    socket: Socket | undefined;
    typing: ChatMessagerie | undefined;
}
const SocketContext = createContext<propsSocketContext | undefined>(undefined);

export const useSocket = (): propsSocketContext | undefined => {
    const context = useContext(SocketContext);
    if (!context) {
        console.log("Le contexte socket  n`est pas fourni");
    }
    return context;
};

const SocketProvider = ({ children }: Props) => {
    const [socket, setSocket] = useState<Socket | undefined>(undefined);
    const [showTypingGesture, setShowTypingGesture] = useState<
        ChatMessagerie | undefined
    >(undefined);

    useEffect(() => {
        const initializeSocket = async () => {
            const session = await getSession();

            if (session?.backendToken.accessToken) {
                const newSocket = io("http://localhost:8000/chats", {
                    extraHeaders: {
                        Authorization: `Bearer ${session.backendToken.accessToken}`,
                    },
                    autoConnect: false,
                });
                newSocket.connect();
                setSocket(newSocket);
            }
            initializeSocket();
}});


    useEffect(() => {
        function eventTyping(res:ChatMessagerie){
                console.log("est ce que les données sont capturées");
                console.log(res);
                setShowTypingGesture(res);
        }
        socket?.on("typing",eventTyping);
        return () => {
            socket?.off("typing");
        };
    },[socket]);
    return (
        <SocketContext.Provider
            value={{ socket: socket, typing: showTypingGesture }}
        >
            {children}
        </SocketContext.Provider>
    );
};

export default SocketProvider;
