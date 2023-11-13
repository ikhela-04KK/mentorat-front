"use client"; 
import Image from "next/image"
import React from "react"; 

type person = {
    person:string;
}

export const Certified: React.FC<person> = ({person}) =>{
    return (
        <>
            <div className="rounded-full border border-solid border-white mr-4">
                <span className="absolute top-[50px] left-[50px]">
                    <Image 
                    src="/certified.svg" 
                    width={16}
                    height={16}
                    alt="accounts certified"/>
                </span>
                <Image
                    src={"/avatar.png"}
                    width={48}
                    height={48}
                    alt={person}
                    className="rounded-full"
                />
            </div>
        </>
    )
}

// export default Certified;