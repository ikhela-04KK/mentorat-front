"use client";
import React from "react";
// create your own button icon

type counter = {
    count: number;
}


export const Notification: React.FC<counter> = ({ count }) => {
    return (
        <>
            <span className="w-5 h-5 px-1 bg-red-700 rounded-full inline-flex justify-center items-center">
                    <span className=" text-white text-xs font-medium">{count}</span>
            </span>
        </>
    )
}