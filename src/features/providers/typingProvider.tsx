"use client"
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useSocket } from './socketProvider';
import { ChatMessagerie } from '@/lib/chat-type';


interface Iprops {
    children: React.ReactNode;
}

type typingMessagerie = {
    chat_id: number, 
    user_name: string, 
    typing: boolean
    source?:string;
}
const TypingContext = createContext<typingMessagerie  | undefined>(undefined)
export const useTyping = () => {
    const context = useContext(TypingContext)
    if (!context) {
        console.log("le Typing contexte n`est pas fourni")
    }
    return context
}
const TypingProvider = ({ children }: Iprops) => {
    const socket = useSocket()
    const [showTypingGesture, setShowTypingGesture] = useState<typingMessagerie >();

    useEffect(() => {
        socket?.on('typing', (res: typingMessagerie ) => {
            console.log(res)
            setShowTypingGesture(res);
        });
    }, [socket])

    return (
        <TypingContext.Provider value={showTypingGesture}>
            {children}
        </TypingContext.Provider>
    )
}

export default TypingProvider;