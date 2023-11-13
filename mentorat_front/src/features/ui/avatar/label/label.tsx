"use client"; 
import React from "react";


type avatar = {
    label:string;
}
// pour le texte sous les images 

export const Principal:React.FC<avatar> = ({label}) =>{

    return (
        <>
            <div className="w-[92px] h-[28px]">
                <p className="font-semibold text-lg text-[rgb(245,245,246)] first-letter:uppercase">{label}</p>
            </div>
        </>
    )
}

export const Location:React.FC<avatar> = ({label}) =>{
    return (
        <>
            <p className="font-normal text-sm text-[#94969c]">{label}</p>
        </>
    )
}

