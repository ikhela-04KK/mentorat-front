"use client"; 
import React from "react"; 
// create your own button icon

type badge ={
    name:string;
}

export const Online:React.FC<badge> = ({name})=>{
    return (
        <>
                <div className="w-[61px] h-[22px] flex px-1.5 py-0.5 items-center gap-1 rounded border border-[#333741]">
                <span className="w-1.5 h-1.5 bg-green-400 border-2 border-green-400 rounded-full"></span>
                <p className="text-xs font-medium first-letter:uppercase">{name}</p>
            </div>
        </>
    )
}