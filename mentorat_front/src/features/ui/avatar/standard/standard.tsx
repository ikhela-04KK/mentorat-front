"use client"; 
import React from "react"; 
import Image from "next/image";



type person = {
    label:string
    source?:string
}

export const Standard:React.FC<person> =({label, source})=> { // put the props session here

    return (
        <>
            <div className=" rounded-full border border-solid border-white mr-4">
                <Image
                    src={`/${source}`}  //session.user.avatar
                    width={40}
                    height={40}
                    alt={label}
                    className="rounded-full"
                />
            </div>
        </>
    )}


