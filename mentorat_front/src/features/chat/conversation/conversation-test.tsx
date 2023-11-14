"use client";
import React from "react";
import Link from "next/link";

export const TestConvers: React.FC = () => {
    return (
        <>
            <div className="w-96 h-16 pr-8 justify-start items-start inline-flex">
                <div className="grow shrink basis-0 h-16 justify-start items-start gap-3 flex">
                    <div className="w-10 h-10 relative rounded-full">
                        <div className="w-10 h-10 left-0 top-0 absolute rounded-full border border-white border-opacity-10" />
                        <div className="w-2.5 h-2.5 left-[30px] top-[30px] absolute bg-green-400 rounded-full border border-gray-900" />
                    </div>
                    <div className="grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex">
                        <div className="self-stretch justify-start items-center gap-2 inline-flex">
                            <div className="grow shrink basis-0 text-neutral-300 text-sm font-medium font-['Inter'] leading-tight">Anita Cruz</div>
                            <div className="text-neutral-400 text-xs font-normal font-['Inter'] leading-none">Jeudi 12h30</div>
                        </div>
                        <div className="self-stretch px-3.5 py-2.5 bg-gray-900 rounded-tr-lg rounded-bl-lg rounded-br-lg border border-gray-800 justify-start items-center gap-2 inline-flex">
                            <div className="grow shrink basis-0 text-neutral-100 text-base font-normal leading-normal">C est parfait, merci !</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
