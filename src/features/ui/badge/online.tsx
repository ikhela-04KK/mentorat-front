"use client"; 
import React from "react"; 
import { SignalGreen } from "./green-sign";

export type badge ={
    online?:boolean
}

export const Online:React.FC<badge> = ({online})=>{
    return ( 
        
        <>
                <div className="w-[61px] h-[22px] flex px-1.5 py-0.5 items-center gap-1 rounded border border-[#333741]">
                <SignalGreen online ={online} />
                <p className="text-xs font-medium first-letter:uppercase">{ online ? 'online' : 'offline'}</p>
            </div>
        </>
        
    )
}