// // socketContext.tsx
// "use client"
// import React, { ReactNode,createContext, useContext, useState, useEffect, useMemo } from 'react';
// import { useSocket } from './socketProvider';
// import { ChatResult } from '@/lib/chat-type';


// interface Iprops {
//     children: ReactNode;
// }



// const TypingContext = createContext<ChatResult | undefined>(undefined)
// export const useTyping = ():ChatResult | undefined => {
//     const context = useContext(TypingContext)
//     if (!context) {
//         console.log("typing context doesn't providing")
//     }
//     return context
// }



// const TypingProvider = ({ children }: Iprops) => {
//     const socket = useSocket()
//     const [showTypingGesture, setShowTypingGesture] = useState<ChatResult>();

//     useEffect(() => {
//         socket?.on('typing', (res:ChatResult) => {
//             console.log("est ce que les données sont capturées"); 
//             console.log(res)
//             setShowTypingGesture(res);
//             // console.log("Qu est ce qui est retourner ");  
//             // console.log(showTypingGesture)
        
//         });
//     }, [socket])

//     return (
//         <TypingContext.Provider value={showTypingGesture}>
//             {children}
//         </TypingContext.Provider>
//     )
// }

// export default TypingProvider;