"use client"; 
import React from "react"; 
// create your own button icon

type badge ={
    online:boolean
}

export const Online:React.FC<badge> = ({online})=>{
    return (
        
        <>
                <div className="w-[61px] h-[22px] flex px-1.5 py-0.5 items-center gap-1 rounded border border-[#333741]">
                <span className={`w-1.5 h-1.5 bg-${online ? 'green':'red'}-400 border-2 border-${online ? 'green' :'red'} rounded-full`}></span>
                <p className="text-xs font-medium first-letter:uppercase">{online ? 'online' : 'offline'}</p>
            </div>
        </>
        
    )
}