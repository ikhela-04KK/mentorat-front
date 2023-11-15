"use client";
import Image from "next/image"; 
import React from 'react';

export type person = {
    person:string;
}

export const Online:React.FC<person> = ({person}) =>{
    return (
        <>
            <div className="w-10 h-10 relative rounded-full">
                <Image className="w-10 h-10 left-0 top-0 absolute rounded-full border border-white border-opacity-10" src="/avatar.png" alt={person} width={40} height={40} />

                <span className="block w-2.5 h-2.5 left-[30px] top-[30px] absolute bg-green-400 rounded-full border border-gray-900" ></span>

            </div>
        </>
    )
}

{/* <div className="w-10 h-10 left-0 top-0 absolute rounded-full border border-white border-opacity-10" />
</div> */}