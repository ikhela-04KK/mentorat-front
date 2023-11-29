// pour la creation de composant de liste deroulant
"use client";
import React, { MouseEventHandler, useState } from "react"; 
import Image from "next/image";

export type friendMessage  = {
    username:string, 
    message:string,
    source:string,
    certified:boolean,
    location:string, 
    online:boolean,
}

// Decrire le type attendues par les props de la liste enusuite rentre dans les items
interface ListProps {
    setUserInfo: (userInfo:friendMessage) => void;
}

// c'est ici que je dois capturer les messages provenant des autres utilsateurs 

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


export const List:React.FC<ListProps> = ({setUserInfo})=>{
    const [liClicks, setLiClicks] = useState<boolean[]>(Array(messages.length).fill(false)); 

    function handleClick(e:React.MouseEvent<HTMLLIElement, MouseEvent>, item:friendMessage, idx:number){
        const newClicks = [...liClicks];
        newClicks[idx] = true;
        setLiClicks(newClicks)
        setUserInfo(item);
    }
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

                            // si je clique sur le li alors le bg-slate-900 est retiré et le bg-violet-500 est retiré 
                            // ${idx < 3 ? 'bg-slate-900' : ''}`} key={idx} pour dire que seul les 3 premiers éléments doivent avoir une certaine propriété 
                            

                            <li onClick={(e) => handleClick(e,item,idx)} className={`cursor-pointer relative flex justify-between py-4 px-6  last:h-[70px] ${liClicks[idx] ? 'bg-transparent': 'bg-slate-900'}`} key={idx}>
                                <div className="flex items-center">
                                    <Image className="h-10 w-10 rounded-full" src={item.source} alt="" width={40} height={40} />
                                    <div className="ml-3">
                                        <p className="text-sm font-medium text-[#f5f5f6]">{item.username}</p>
                                        <p className="text-sm font-normal text-[#94969c]">{item.message}</p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2 items-center ">
                                    <p className="text-white text-sm font-medium">12:23</p>
                                    <span className={`w-2.5 h-2.5 ${liClicks[idx] ? 'bg-opacity' : 'bg-violet-500'} rounded-full`} > </span>
                                </div>
                            </li>
                        ),
                    )}
                </ul>
        </>
    );
};
