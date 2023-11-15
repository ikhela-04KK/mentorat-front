// pour la creation de composant de liste deroulant
"use client";
import React from "react"; 
import Image from "next/image";

type friendMessage  = {
    name:string, 
    message:string,
    imageUrl:string,
}
const messages: friendMessage[] = [
    {
        name: "John",
        message: "Salut, comment ça va?",
        imageUrl: "avatar02.svg",
    },
    // Ajoutez autant d'objets que nécessaire 
];
//  


export const List:React.FC = ({})=>{
    return (
        <>
                <ul role="list" className="relative divide-y divide-[#1f242f] m-0 overflow-y-auto h-full">
                    {/* each people as person  */}
                    {messages.map(
                        (
                            item:{name:string;message:string; imageUrl:string}, 
                            idx:number,
                        ) =>
                        (
                            <li className={`relative flex justify-between py-4 px-6  last:h-[70px] ${idx < 3 ? 'bg-slate-900' : ''}`} key={idx}>
                                <div className="flex items-center">
                                    <Image className="h-10 w-10 rounded-full" src={item.imageUrl} alt="" width={40} height={40} />
                                    <div className="ml-3">
                                        <p className="text-sm font-medium text-[#f5f5f6]">{item.name}</p>
                                        <p className="text-sm font-normal text-[#94969c]">{item.message}</p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2 items-center ">
                                    <p className="text-white text-sm font-medium">12:23</p>
                                    <span className="w-2.5 h-2.5 bg-violet-500 rounded-full"> </span>
                                </div>
                            </li>
                        ),
                    )}
                </ul>
        </>
    );
};
