"use client"; 
import React from "react"; 
import { badge } from "./online";


export const SignalGreen:React.FC<badge> = ({online})=>{
    return (
        <>
            <span className={`inline-block w-1.5 h-1.5 bg-${ online ? 'green':'red'}-400  rounded-full`}></span>
        </>
    )
}