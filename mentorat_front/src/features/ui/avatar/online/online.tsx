"use client";
import Image from "next/image"; 
import React from 'react';

type person = {
    person:string;
}

export const Online:React.FC<person> = ({person}) =>{
    return (
        <>
            <div className="relative">
                <Image className="w-10 h-10 rounded-full" src="/avatar.png" alt={person} width={40} height={40} />

                <span className="bottom-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white rounded-full"></span>

            </div>
        </>
    )
}