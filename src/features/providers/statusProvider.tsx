// // mise en place du provider pour le status en ligne ou offline 
// 'use client'; 
// import React, { createContext, useContext, useState, useEffect } from 'react';
// import { useSocket } from './socketProvider';


// interface Props {
//     children: React.ReactNode;
// }

// // const StatusContext = createContext<undefined>(undefined)

// // export const useStatus = () =>{ 
// //     const context = useContext(StatusContext); 
// //     if(!context){
// //         console.log("Le contexte n`est pas fourni");
// //     }
// //     return context
// // }

// const StatusProvider = ({children}:Props) =>{
//     const activeSocket = useSocket(); 

//     useEffect(()=>{
//         const onlineUser = activeSocket?.on('users', (data) =>{
//             console.log('Message from socket: ' + data)
//         })
//     })

    

// }