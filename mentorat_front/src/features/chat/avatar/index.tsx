"use client";

import Image from "next/image";
import React from "react";

type person = {
    person: string;
    size: number;
    source?:string;
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
    {
        person: "notification",
        size:40,
        source:"notification.svg",
    },
];

const Avatar: React.FC<person> = ({ person, size=40 }) => {
    return (
        <>
            <Image
                className="rounded-full border border-solid border-white pr-8"
                src={"/avatar-0.svg"}
                width={size}
                height={size}
                alt={person}
            />

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
            </div>
        </>
    );
};
export default Avatar;
