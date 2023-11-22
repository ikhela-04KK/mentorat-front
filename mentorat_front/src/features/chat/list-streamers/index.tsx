// pour la creation de composant de liste deroulant
"use client";
import React from "react"; 
import Image from "next/image";

export type friendMessage  = {
    username:string, 
    message:string,
    source:string,
    certified:boolean,
    location:string, 
    online:boolean,

}
const messages: friendMessage[] = [
    {
        username: "John",
        message: "Salut, comment ça va?",
        source: "avatar02.svg",
        certified:false, 
        location:"Abidjan, Côte d'Ivoire",
        online:false
    },
    {
        username: "marie",
        message: "Salut, bb tu vas?",
        source: "avatar02.svg",
        certified:true, 
        location:"pananma, France",
        online:true
    },
    // Ajoutez autant d'objets que nécessaire 
];


export const List:React.FC<any> = ({setUserInfo})=>{

    return (
        <>
                <ul role="list" className="relative divide-y divide-[#1f242f] m-0 overflow-y-auto h-full">
                    {/* each people as person  */}
                    {messages.map(
                        (
                            item:{
                                username:string;
                                message:string; 
                                source:string; 
                                certified:boolean; 
                                location:string; 
                                online:boolean;
                            }, 
                            idx:number,
                        ) =>
                        (
                            <li onClick={() => setUserInfo(item)} className={`relative flex justify-between py-4 px-6  last:h-[70px] ${idx < 3 ? 'bg-slate-900' : ''}`} key={idx}>
                                <div className="flex items-center">
                                    <Image className="h-10 w-10 rounded-full" src={item.source} alt="" width={40} height={40} />
                                    <div className="ml-3">
                                        <p className="text-sm font-medium text-[#f5f5f6]">{item.username}</p>
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
