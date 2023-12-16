'use client';

// socketContext.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { getSession} from 'next-auth/react';
import { Socket, io } from "socket.io-client";

interface Props {
    children: React.ReactNode;
}
const SocketContext = createContext<Socket | undefined>(undefined);

export const  useSocket = () => {
    const context = useContext(SocketContext);
    if (!context) {
        console.log("Le contexte n`est pas fourni")
    }
    return context;
};

const SocketProvider = ({ children }:Props) => {
    const [socket, setSocket] = useState<Socket | undefined>(undefined);

    useEffect(() => {
        const initializeSocket = async () => {
            const session = await getSession();

            if (session?.backendToken.accessToken) {
                const newSocket = io('http://localhost:8000/chats', {
                    extraHeaders: {
                        Authorization: `Bearer ${session.backendToken.accessToken}`,
                    },
                    autoConnect: false,
                });
                newSocket.connect()

                setSocket(newSocket);

                return () => {
                    newSocket.disconnect();
                };
            }
        };
        initializeSocket();
    }, []);

    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    );
};

export default SocketProvider;