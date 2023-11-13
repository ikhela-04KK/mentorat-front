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
                <span className="w-2 h-2 bg-green-400 border-2 border-white rounded-full"></span>
                <p className="text-xs font-medium first-letter:uppercase">{name}</p>
            </div>
        </>
    )
}