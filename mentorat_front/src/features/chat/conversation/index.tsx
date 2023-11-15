"use client";
import React from "react";
import {TextMessage} from "@features/ui/text-field/text-entry-sign";
import {BtnSendMessage} from "@features/ui/buttons/btn-sign"
import { Online } from "@/features/ui/avatar/online/online";

export const ChatSteam: React.FC = () => {
    return (
        <>
            <div className="h-[588p] overflow-y-auto px-4 pb-6 flex flex-col">

                <div className="w-full h-[118px] flex justify-start mb-8 mt-8">
                    <div className="w-96 pr-8 h-full items-start">
                        <div className="grow shrink basis-0 h-auto  items-start flex gap-4 justify-start">{/**/}
                            {/* Avatar component  */}
                            <Online person="online" />

                            <div className="grow shrink basis-0 flex-col justify-start items-start gap-1.5 flex">
                                <div className="self-stretch gap-2 flex">{/*justify-start*/}
                                    <p className="grow shrink basis-0 text-neutral-300 text-sm font-medium leading-tight">Anita Cruz</p>
                                    <p className="text-neutral-400 text-xs font-normal ">Jeudi 12h30</p>
                                </div>
                                <div className="px-3.5 py-2.5 bg-gray-900 rounded-tr-lg rounded-bl-lg rounded-br-lg border border-gray-800  items-center gap-2 flex">{/*justify-start */}
                                    <p className="grow shrink basis-0 text-neutral-100 text-base font-normal ">Salut Aziz , c'est ta Muse je n'ai pas vu pas mes règles depuis quelques jours </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="w-full h-[118px] flex justify-end mb-8 mt-8">
                    <div className="w-96 h-full pl-8 ">{/*justify-end items-start flex*/}
                        <div className="h-16  gap-3 ">{/*grow shrink basis-0 flex justify-end items-start*/}
                            <div className="flex-col items-start gap-1.5 flex">{/*grow shrink basis-0 justify-start */}
                                <div className="self-stretch  items-center gap-2 flex">{/*grow shrink basis-0 justify-startjustify-start */}
                                    <p className="grow shrink basis-0 text-neutral-300 text-sm">Vous</p>
                                    <p className="text-neutral-400 text-xs font-normal">Il y a 10 minutes</p>
                                </div>
                                <div className="self-stretch px-3.5 py-2.5 bg-violet-500 rounded-tl-lg rounded-bl-lg rounded-br-lg justify-start items-center gap-2 flex">
                                    <p className="grow shrink basis-0 text-white text-base font-normal ">Et alors , ça veux dire quoi ? </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Date component */}
                <div className="w-full h-5 justify-center items-center my-4 gap-2 flex">
                    <div className="w-full h-px bg-gray-800" />
                    <div className="text-center text-neutral-400 text-sm font-medium ">Aujourdhui</div>
                    <div className="w-full h-px bg-gray-800" />
                </div>


            </div>   {/*overflow-y-auto overflow-x-hidden  */}
            {/* chat streamControls */}
            <div className="h-[86px] px-6 pb-6 pt-5  border-t border-gray-800 flex justify-between items-center">
                <TextMessage name="message" type="text" placeholder="message" />
                <BtnSendMessage type="submit" />
            </div>
        </>
    )
}


