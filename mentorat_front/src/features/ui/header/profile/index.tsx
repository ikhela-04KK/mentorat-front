"use client";

import Image from "next/image";
import React from "react";
import { Standard } from "../../avatar/standard/standard";

type person = {
    label: string;
    source?:string;
    notification:number;
};

const listIcon = [
    {
        person: "search",
        size: 40,
        source:"/search.svg",   
    },
    {
        person: "seeting",
        size:40,
        source:"seeting.svg",
    },

];


const Avatar: React.FC<person> = ({label, source,notification}) => {
    return (
        <>
            <Standard label={label} source={source}  /> {/*put the source variable */}

            
            <div className="flex items-center">
                {listIcon.map(
                    (
                        item: {
                            person: string;
                            size: number;
                            source:string;
                        },
                        idx: number,
                    ) => (
                        <Image
                            key={idx}
                            className="p-2"
                            width={item.size}
                            height={item.size}
                            src={item.source}
                            alt={item.person}
                        />
                    ),
                )}
                <div className="ml-1 relative">
                    <span className="absolute left-4 w-5 h-5 px-1 bg-red-700 rounded-full inline-flex justify-center items-center">
                        <span className=" text-white text-xs font-medium">{notification}</span>
                    </span>
                    <Image
                                className="p-2"
                                width={40}
                                height={40}
                                src={"/notification.svg"}
                                alt={"notification"}
                            />
                    </div>
            </div>
        </>
    );
};
export default Avatar;
