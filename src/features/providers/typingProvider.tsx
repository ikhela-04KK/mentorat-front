// socketContext.tsx
"use client"
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useSocket } from './socketProvider';


interface Iprops {
    children: React.ReactNode;
}

const TypingContext = createContext<boolean | undefined>(undefined)
export const useTyping = () => {
    const context = useContext(TypingContext)
    if (!context) {
        console.log("typing ocntext doesn't providing")
    }
    return context
}


const TypingProvider = ({ children }: Iprops) => {
    const socket = useSocket()
    const [showTypingGesture, setShowTypingGesture] = useState<boolean>(false);

    useEffect(() => {
        socket?.on('typing', (res: {chatId:number,userId:number, isTyping: boolean }) => {
            setShowTypingGesture(res.isTyping);
        });
    }, [socket])

    return (
        <TypingContext.Provider value={showTypingGesture}>
            {children}
        </TypingContext.Provider>
    )
}

export default TypingProvider;