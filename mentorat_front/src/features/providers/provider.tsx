'use client';
import { SessionProvider } from "next-auth/react"
import {ReactNode} from "react";

// creation d'interface pour le props 
interface Props{
    children : ReactNode;
}

// declaration de l'utilisation de session 
const Providers = ({children}:Props) =>{
    return <SessionProvider> {children}</SessionProvider>
};

export default Providers;