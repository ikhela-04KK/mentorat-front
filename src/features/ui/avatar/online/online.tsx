"use client";
import Image from "next/image"; 
import React from 'react';

export type person = {
    person?:string  | "";
    online?:boolean |false;
    source?:string;
}

export const Online:React.FC<person> = ({person,online,source}) =>{
    return (
        <>
            <div className="w-10 h-10 relative rounded-full">
                <Image className="w-10 h-10 left-0 top-0 absolute rounded-full border border-white border-opacity-10" src={`/${source}`} alt={person ? person : "image of avatar"} width={40} height={40} />

                {online && <span className="block w-2.5 h-2.5 left-[30px] top-[30px] absolute bg-green-400 rounded-full border border-gray-900" ></span>}

            </div>
        </>
    )
}

{/* <div className="w-10 h-10 left-0 top-0 absolute rounded-full border border-white border-opacity-10" />
</div> */}