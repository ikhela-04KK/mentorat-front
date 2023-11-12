// pour la creation de composant de liste deroulant
"use client";
import React from "react"; 
import Image from "next/image";

type friendMessage  = {
    name:string, 
    email:string,
    imageUrl:string,
}

const ListFm:React.FC<friendMessage> = ({name, email, imageUrl})=>{
    return (
        <>
            <div>
                <ul role="list" className="p-6 divide-y divide-slate-200">
                    {/* each people as person  */}
                    <li className="flex py-4 first:p-0 last:pb-0">
                        <Image className="h-10 w-10 rounded-full" src={imageUrl} alt="" />
                        <div className="ml-3 overflow-hidden">
                            <p className="text-sm font-medium text-slate-900">{name}</p>
                            <p className="text-sm font-medium text-slate-900">{email}</p>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default ListFm;
